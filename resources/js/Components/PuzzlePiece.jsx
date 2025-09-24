// resources/js/Components/PuzzlePiece.jsx
import React, { useState, useRef, useEffect } from 'react';

export default function PuzzlePiece({ onComplete }) {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const pieceRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setPosition({
            x: e.clientX - pieceRef.current.getBoundingClientRect().left,
            y: e.clientY - pieceRef.current.getBoundingClientRect().top,
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        pieceRef.current.style.left = `${e.clientX - position.x}px`;
        pieceRef.current.style.top = `${e.clientY - position.y}px`;
    };

    const handleMouseUp = () => {
        setIsDragging(false);

        const pieceRect = pieceRef.current.getBoundingClientRect();
        const targetRect = document.getElementById('puzzle-target').getBoundingClientRect();

        // A more robust check: does the piece's center fall within the target?
        const isDroppedInTarget = (
            pieceRect.left + pieceRect.width / 2 >= targetRect.left &&
            pieceRect.right - pieceRect.width / 2 <= targetRect.right &&
            pieceRect.top + pieceRect.height / 2 >= targetRect.top &&
            pieceRect.bottom - pieceRect.height / 2 <= targetRect.bottom
        );

        if (isDroppedInTarget) {
            console.log("Puzzle complete! Calling onComplete prop."); // Add this line
            onComplete();
        } else {
            console.log("Puzzle not in target.");
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, position]);

    return (
        <div
            ref={pieceRef}
            onMouseDown={handleMouseDown}
            className="absolute z-50 cursor-grab active:cursor-grabbing transition-all duration-100 select-none"
            style={{ 
                left: '200px', // Initial position
                top: '200px',
            }}
        >
            <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                🧩
            </div>
        </div>
    );
}