<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $requestData = $request->json()->all();

        // Print the data (you can use dd() or log() for debugging)
        dd($requestData);
    
        return response()->json(['message' => 'Authentication successful']);
    }
}
