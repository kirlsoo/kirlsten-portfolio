<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Handle the contact form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function submit(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // Process the data (e.g., save to database, send email, etc.)
        // For now, we'll just flash the data to the session as an example
        session()->flash('status', 'Thank you for contacting us!');

        // Redirect back to the contact page or any other page
        return redirect()->back();
    }
}
