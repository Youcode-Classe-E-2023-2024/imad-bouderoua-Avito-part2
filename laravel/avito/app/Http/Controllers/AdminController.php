<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Anonce;
use App\Models\User;
class AdminController extends Controller
{
    public function index()
    {
        $data = Anonce::all();
        $Users = User::all();
        return view('administration')->with(['data' => $data, 'users' => $Users]);


    }
    public function deleteuser($id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json(['error' => 'User not found']);
    }

    $deleted = $user->delete();

    if ($deleted) {
        return response()->json(['message' => 'User deleted successfully']);
    } else {
        return response()->json(['error' => 'Failed to delete user']);
    }
}

public function deleteAnnouncement($id)
{
    $announcement = Anonce::find($id);

    if (!$announcement) {
        return response()->json(['error' => 'Announcement not found']);
    }

    $deleted = $announcement->delete();

    if ($deleted) {
        return response()->json(['message' => 'Announcement deleted successfully']);
    } else {
        return response()->json(['error' => 'Failed to delete announcement']);
    }
}
}
