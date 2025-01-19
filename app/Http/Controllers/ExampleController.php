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
}
