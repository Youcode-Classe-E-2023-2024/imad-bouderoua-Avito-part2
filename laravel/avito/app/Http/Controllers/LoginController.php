<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Anonce;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        try {
            $credentials = $request->json()->all();

            // Add authentication logic or validation here...

            $user = User::create([
                'first_name' => $credentials['firstName'],
                'last_name' => $credentials['lastName'],
                'email' => $credentials['email'],
                'password' => bcrypt($credentials['password']), // Use bcrypt to hash the password
            ]);

            

            return response()->json(['message' => 'User created successfully']);
        } catch (\Exception $e) {
            Log::error('Error creating user', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
    public function logaccount(Request $request){
        $loginform = $request->json()->all();
        $users = User::where('email', $loginform['email'])->get();
        if ($users->isEmpty()) {
            return response()->json(['message' =>'user not found']);
        } else {
            return response()->json(['message' =>$users]);
        }
        
    }
    public function addanonce(Request $request)
{
    

    // Check if a file is present in the request
    if ($request->hasFile('productPhoto')) {

        $productName = $request->input('productName');
        $productPrice = $request->input('productPrice');
        $description = $request->input('description');
        $city = $request->input('city');
        $productowner = $request->input('productowner');

        $file = $request->file('productPhoto');
        
        // Store the file in the storage/app/uploads directory
        $filePath = $file->store('uploads', 'public');

        $anonce = Anonce::create([
            'product_name' => $productName,
            'product_price' => $productPrice,
            'description' => $description,
            'product_photo' => $filePath,
            'city' => $city,
            'productowner'=>$productowner,
            'premium'=> 'no',
        ]);

        return response()->json(['message' => 'Annonce added successfully', $productowner]);
    } else {
        return response()->json(['message' => 'No file uploaded']);
    }
}       


public function getImage($filename)
{
    // filename = 0BHOFcsZ3ALhaXXHbJ0ayQHs8fB75zCZaVoJsFC4.jpg
    
    $path = storage_path('app/public/uploads/' . $filename);

    

    return response()->file($path);
}


        public function getdata(Request $request)
        {
            
            $data = Anonce::all();

            return response()->json(['data' => $data]);
        }
    
        public function useranonces($username){
            $datau = Anonce::where('productowner', $username)->get();
            return response()->json(['data',$datau]);
        }
}




