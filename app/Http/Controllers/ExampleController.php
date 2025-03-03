<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExampleController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Welcome', [
            'name' => 'John Doe',
            'age' => 30,
        ]);
    }

    public function blog(Request $request)
    {
        return inertia('Blog', [
            'title' => 'My Blog',
            'content' => 'Welcome to my blog page!',
        ]);
    }
}
