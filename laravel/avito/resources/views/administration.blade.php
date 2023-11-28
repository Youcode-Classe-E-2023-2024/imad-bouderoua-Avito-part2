<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Administration</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
        }

        h1 {
            color: #333;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        .divs, .divsusers {
            transition: opacity 0.3s;
        }

        .divsusers td,
        .divs td {
            position: relative;
        }

        .mhini, .mhiniuser {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 5px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 1;
        }

        .mhini:hover, .mhiniuser:hover {
            background-color: #45a049;
        }

        .divs:hover, .divsusers:hover {
            background-color: #f5f5f5;
        }

        .divs:not(:hover), .divsusers:not(:hover) {
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <h1>Welcome to Administration</h1>

    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Product Owner</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                @foreach($data as $user)
                    <tr class="divs">
                        <td class="id">{{ $user->id }}</td>
                        <td>{{ $user->product_name}}</td>
                        <td>{{ $user->productowner }}</td>
                        <td>
                            <button class="mhini">m7ini</button>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                @foreach($users as $user)
                    <tr class="divsusers">
                        <td class="id">{{ $user->id }}</td>
                        <td>{{ $user->email}}</td>
                        <td>{{ $user->first_name }}</td>
                        <td>{{ $user->last_name }}</td>
                        <td>
                            <button class="mhiniuser">m7ini</button>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <script>
        var divs = document.querySelectorAll('.divs');
        var buttons = document.querySelectorAll('.mhini');
        var divsusers = document.querySelectorAll('.divsusers');
        var buttonsusers = document.querySelectorAll('.mhiniuser');

        buttons.forEach((element, index) => {
            element.addEventListener("click", () => {
                divs[index].style.display = 'none';
                let product = divs[index].querySelector('.id').textContent;
                deleteAnnouncement('delete-announcement', product);
            });
        });

        buttonsusers.forEach((element, index) => {
            element.addEventListener("click", () => {
                divsusers[index].style.display = 'none';
                let product = divsusers[index].querySelector('.id').textContent;
                deleteAnnouncement('delete-user', product);
            });
        });

        function deleteAnnouncement(endpoint, id) {
            fetch(`/${endpoint}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
        }
    </script>
</body>
</html>
