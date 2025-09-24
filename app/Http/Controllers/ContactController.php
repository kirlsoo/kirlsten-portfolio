<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // ✅ Validate inputs
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string|max:2000',
        ]);

        // ✅ Send email
        Mail::to('your-email@example.com')->send(new ContactFormMail($validated));

        return response()->json(['success' => true, 'message' => 'Message sent successfully!']);
    }
}
