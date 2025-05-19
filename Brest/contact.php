<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="icon" href="images/ongletblack.ico" type="image/x-icon">
    <title>Commandes Restau IMTemporel</title>
    <style>
        body {
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding: 20px;
            margin: 0;
            overflow: scroll;
            position: relative;
            background: linear-gradient(#17223B, #3FBADE, #9DCB9C);
            background-size: cover;
            background-attachment: fixed;
        }

        h1, p {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            border-radius: 10px;
            position: relative;
            z-index: 1;
        }
        
        h2, p {
            max-width: 500px;
            max-height: 50px;
            font-size: 14px;
            margin: auto;
            padding: 10px;
            background-color: inherit; /* Couleur de fond du sticker */
            color: #17223B; /* Couleur du texte */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Ombre pour l'effet de sticker */
            border-radius: 10px; /* Coins arrondis */
            border: 2px solid #17223B; /* Bordure pour un effet de sticker */
            position: relative;
            z-index: 1;
        }
        
        h3, p {
            max-width: 500px;
            max-height: 50px;
            font-size: 15px;
            margin: auto;
            padding: 10px;
            background-color: inherit; /* Couleur de fond du sticker */
            color: #17223B; /* Couleur du texte */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Ombre pour l'effet de sticker */
            border-radius: 10px; /* Coins arrondis */
            border: 2px solid #17223B; /* Bordure pour un effet de sticker */
            position: relative;
            z-index: 1;
            font-weight: bold;
        }

        video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        form {
            max-width: 500px;
            margin: auto;
            padding: 20px;
            background-color: inherit; /* Couleur de fond du sticker */
            color: #17223B; /* Couleur du texte */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Ombre pour l'effet de sticker */
            border-radius: 10px; /* Coins arrondis */
            border: 2px solid #17223B; /* Bordure pour un effet de sticker */
            position: relative;
            z-index: 1;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #17223B;
        }

        input[type="text"],
        input[type="password"],
        select {
            width: 100%;
            padding: 10px;
            margin-bottom: 16px;
            border: 1px solid #17223B;
            border-radius: 4px;
            box-sizing: border-box;
            background-color: rgba(26, 26, 26, 0.8);
            color: #fff;
        }

        input[type="submit"] {
            background-color: #fcb00b;
            color: #FFFFFF;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #fcb00b;
        }

        .sticker-title {
            position: relative;
            background-color: inherit; /* Couleur de fond du sticker */
            color: #17223B; /* Couleur du texte */
            font-size: 3em; /* Taille du texte */
            font-weight: bold;
            text-align: center;
            padding: 20px 40px; /* Espacement interne */
            margin: 20px auto; /* Espacement externe */
            width: fit-content; /* Ajuste la largeur au contenu */
            transform: rotate(0deg); /* Inclinaison du sticker */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Ombre pour l'effet de sticker */
            border-radius: 10px; /* Coins arrondis */
            border: 3px solid #17223B; /* Bordure pour un effet de sticker */
        }

        .sticker-title h1 {
            margin: 0; /* Supprime les marges par défaut */
            font-family: 'Montserrat', sans-serif; /* Police utilisée dans le reste de la page */
        }

        @media screen and (max-width: 640px) {
            .sticker-title {
                max-width: 100%;
                box-sizing: border-box;
                text-align: center;
                font-size: 1.6em; /* Réduit la taille du texte sur mobile */
                padding: 10px 10px; /* Ajuste l'espacement interne */
                transform: rotate(0deg); /* Réduit l'inclinaison sur mobile */
            }
        }

        
    </style>
</head>



<?php

// Démarre une session PHP
session_start();

// Vérifier si un identifiant unique existe dans le cookie
if (!isset($_COOKIE['user_unique_id'])) {
    // Si le cookie n'existe pas, en créer un nouveau
    $user_unique_id = uniqid(); // Génère un identifiant unique
    setcookie('user_unique_id', $user_unique_id, time() + 3600 * 24 * 365, "/"); // Cookie valable pendant 1 an
} else {
    // Si le cookie existe, l'utiliser comme identifiant unique
    $user_unique_id = $_COOKIE['user_unique_id'];
}

$servername = "localhost";
$database = "u760277800_allo_imtemp";
$username = "u760277800_imtemporels";
$password = "41!k%m4Lff2vB";

/* $conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} */

// Récupérer le menu sélectionné (si disponible)
$menu_selectionne = isset($_POST['new_command_nom_allo']) ? $_POST['new_command_nom_allo'] : null;

// Requête pour récupérer les menus disponibles
$sql_dispo = "SELECT * FROM DispoRestau WHERE qte > 0";
// $result_dispo = $conn->query($sql_dispo);

// Requête pour récupérer les horaires associés au menu sélectionné
$horaires_disponibles = [];
if ($menu_selectionne) {
    $menu_selectionne_escaped = mysqli_real_escape_string($conn, $menu_selectionne);
    $sql_horaires = "SELECT heure FROM HorairesRestau WHERE qte_dispo > 0 AND menu_nom = '$menu_selectionne_escaped'";
    $result_horaires = $conn->query($sql_horaires);

    while ($row_horaires = $result_horaires->fetch_assoc()) {
        $horaires_disponibles[] = $row_horaires['heure'];
    }
}
?>


<body>
<div class="sticker-title">
      <h1>Nous contacter</h1>
    </div><br>
    <!--<p style='text-align: center;'>Les allos sont actuellement fermés.</p><br>-->
    
    
    
    <?php
    echo <<<HTML
        <form method="post" action="{$_SERVER['PHP_SELF']}">
        <label for="new_command_nom_allo">Objet:</label>
        <select id="new_command_nom_allo" name="new_command_nom_allo" onchange="this.form.submit()" required>
            <option value="">-- Select a subject --</option>
    HTML;

    while ($row_dispo = $result_dispo->fetch_assoc()) {
        $selected = ($menu_selectionne === $row_dispo['nom']) ? 'selected' : '';
        echo "<option value='{$row_dispo['nom']}' $selected>{$row_dispo['nom']}</option>";
    }

    echo <<<HTML
        </select>
        </form>
        <br/>
    HTML;
    
    

    if ($menu_selectionne) {
        
        if ($menu_selectionne_escaped == 'Lasagnes' or $menu_selectionne_escaped == 'Lasagnes [V]') {
            echo <<<HTML
                <h2>Allergenes : <br> Gluten, Lait, Sulfites, Celeri</h2>
                <br>
            HTML;
        }   else if ($menu_selectionne_escaped == 'Lasagnes [H]') {
            echo <<<HTML
                <h2>Allergenes : <br> Gluten, Lait, Celeri</h2>
                <br>
            HTML;
        }   else if ($menu_selectionne_escaped == 'Naan Kebab + Frites' or $menu_selectionne_escaped == 'Naan Kebab + Frites [H]') {
            echo <<<HTML
                <h2>Allergenes : <br> Gluten, Lait, Sulfites, Epices</h2>
                <br>
            HTML;
        }   else if ($menu_selectionne_escaped == 'Burger + Frites [H] [V]') {
            echo <<<HTML
                <h2>Allergenes : <br> Gluten, Lait, Sulfites</h2>
                <br>
            HTML;
        }   else if ($menu_selectionne_escaped == 'Pizza [H]') {
            echo <<<HTML
                <h2>Allergenes : <br> Gluten, Lait, Oeufs, Sulfites, Celeri</h2>
                <br>
            HTML;
        }
        
        
        
        echo <<<HTML
            <form method="post" action={$_SERVER['PHP_SELF']}>
            <input type="hidden" name="new_command_nom_allo" value="{$menu_selectionne}">
        HTML;
        
            if ($menu_selectionne_escaped == 'Burger + Frites [H] [V]'){
                echo <<<HTML
                    <label for="new_command_burger">Sauce:</label>
                    <select id="new_command_burger" name="new_command_burger" required>
        
                       <option value='1'>Mayo</option>";
                       <option value='2'>Ketchup</option>";
    
                    </select>
                HTML;
            }
            if ($menu_selectionne_escaped == 'Naan Kebab + Frites' or $menu_selectionne_escaped == 'Naan Kebab + Frites [H]'){
                echo <<<HTML
                    <label for="new_command_kebab">Sauce:</label>
                    <select id="new_command_kebab" name="new_command_kebab" required>
        
                       <option value='1'>Algerienne</option>";
                       <option value='2'>Blanche</option>";
    
                    </select>
                HTML;
            }

        echo <<<HTML
            <label for="new_command_prenom">Name:</label>
            <input type="text" id="new_command_prenom" name="new_command_prenom" maxlength="60" required>

            <label for="new_command_chambre">Room:</label>
            <input type="text" id="new_command_chambre" name="new_command_chambre" maxlength="30" required>

            <label for="new_command_numero">Phone number:</label>
            <input type="text" id="new_command_numero" name="new_command_numero" maxlength="20" inputmode="numeric" required oninput="this.value = this.value.replace(/[^0-9 +]/g, '');">

            <label for="new_command_horaire_allo">Time slot:</label>
            <select id="new_command_horaire_allo" name="new_command_horaire_allo" required>
        HTML;

        foreach ($horaires_disponibles as $horaire) {
            echo "<option value='{$horaire}'>{$horaire}</option>";
        }

        echo <<<HTML
            </select>

            <input type="submit" value="ORDER" style="font-weight: bold;" name="commander">
            </form>
        HTML;
    

        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["commander"])) {
            $new_command_prenom = mysqli_real_escape_string($conn, $_POST["new_command_prenom"]);
            $new_command_chambre = mysqli_real_escape_string($conn, $_POST["new_command_chambre"]);
            $new_command_nom_allo = mysqli_real_escape_string($conn, $_POST["new_command_nom_allo"]);
            $new_command_numero = mysqli_real_escape_string($conn, $_POST["new_command_numero"]);
            $new_command_horaire_allo = mysqli_real_escape_string($conn, $_POST["new_command_horaire_allo"]);
            date_default_timezone_set('Europe/Paris');
            $heure_submission = date('Y-m-d H:i:s');

            // Vérifier si une commande existe déjà
            $requete_verification = "
                SELECT * FROM AlloRestau 
                WHERE (ip = '$user_unique_id' OR Telephone = '$new_command_numero')
                  AND TIMESTAMPDIFF(MINUTE, Heure, '$heure_submission') < 15
            ";
            $resultat_verification = $conn->query($requete_verification);
        
            if ($resultat_verification->num_rows > 0) {
                echo <<<HTML
                            <script>
                                document.addEventListener('DOMContentLoaded', function() {
                                    const modal = document.createElement('div');
                                    modal.classList.add('modal');
                                    modal.innerHTML = '<p>Commande déjà passée il y a moins de 15 minutes !</p>';
                                    document.body.appendChild(modal);
    
                                    setTimeout(function() {
                                        modal.style.display = 'none';
                                        window.location.href = 'allos.html';
                                    }, 3000);
                                });
                            </script>
                            <style>K
                                .modal {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    position: fixed;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: rgba(0, 0, 0, 0.5);
                                    color: #fff;
                                    z-index: 1000;
                                }
    
                                .modal p {
                                    background: #333;
                                    padding: 20px;
                                    border-radius: 10px;
                                }
                            </style>
                        HTML;
                        exit();
            }
    
            $requete_get = "SELECT qte FROM DispoRestau WHERE nom='$new_command_nom_allo'";
            $result_get = $conn->query($requete_get);
            $row_get = $result_get->fetch_assoc();
            $quantite_disponible = $row_get['qte'];
            
            $requete_get2 = "SELECT qte_dispo FROM HorairesRestau WHERE menu_nom='$new_command_nom_allo' AND heure='$new_command_horaire_allo'";
            $result_get2 = $conn->query($requete_get2);
            $row_get2 = $result_get2->fetch_assoc();
            $quantite_disponible2 = $row_get2['qte_dispo'];

            if (($quantite_disponible > 0) && ($quantite_disponible2 > 0)) {
                $requete_ajout = "INSERT INTO `AlloRestau`(`Prenom`, `Chambre`, `Menu`, `Telephone`, `Heure`, `Horaire`, `ip`) VALUES ('$new_command_prenom','$new_command_chambre','$new_command_nom_allo', '$new_command_numero', '$heure_submission', '$new_command_horaire_allo', '$user_unique_id')";
                
                
                if ($menu_selectionne_escaped == 'Burger + Frites [H] [V]'){
                    $new_command_burger = isset($_POST["new_command_burger"]) ? mysqli_real_escape_string($conn, $_POST["new_command_burger"]) : null;
                    // var_dump($new_command_burger); // Déboguer pour vérifier la valeur
                
                    if ($new_command_burger == '1'){ // Si Sauce est 'Mayo'
                        $requete_ajout = "INSERT INTO `AlloRestau`(`Prenom`, `Chambre`, `Menu`, `Telephone`, `Heure`, `Horaire`, `ip`, `opt`) VALUES ('$new_command_prenom','$new_command_chambre','$new_command_nom_allo', '$new_command_numero', '$heure_submission', '$new_command_horaire_allo', '$user_unique_id', 'Mayo')";
                    } else {
                        $requete_ajout = "INSERT INTO `AlloRestau`(`Prenom`, `Chambre`, `Menu`, `Telephone`, `Heure`, `Horaire`, `ip`, `opt`) VALUES ('$new_command_prenom','$new_command_chambre','$new_command_nom_allo', '$new_command_numero', '$heure_submission', '$new_command_horaire_allo', '$user_unique_id', 'Ketch')";
                    }
                }   else if (($menu_selectionne_escaped == 'Naan Kebab + Frites') or ($menu_selectionne_escaped == 'Naan Kebab + Frites [H]')){
                    $new_command_kebab = isset($_POST["new_command_kebab"]) ? mysqli_real_escape_string($conn, $_POST["new_command_kebab"]) : null;
                    // var_dump($new_command_kebab); // Déboguer pour vérifier la valeur
                
                    if ($new_command_kebab == '1'){ // Si Sauce est 'Alge'
                        $requete_ajout = "INSERT INTO `AlloRestau`(`Prenom`, `Chambre`, `Menu`, `Telephone`, `Heure`, `Horaire`, `ip`, `opt`) VALUES ('$new_command_prenom','$new_command_chambre','$new_command_nom_allo', '$new_command_numero', '$heure_submission', '$new_command_horaire_allo', '$user_unique_id', 'Alge')";
                    } else {
                        $requete_ajout = "INSERT INTO `AlloRestau`(`Prenom`, `Chambre`, `Menu`, `Telephone`, `Heure`, `Horaire`, `ip`, `opt`) VALUES ('$new_command_prenom','$new_command_chambre','$new_command_nom_allo', '$new_command_numero', '$heure_submission', '$new_command_horaire_allo', '$user_unique_id', 'Blanc')";
                    }
                }
    
    
    
                if ($conn->query($requete_ajout) === TRUE) {
                    $nouvelle_quantite = $quantite_disponible - 1;
                    $nouvelle_quantite2 = $quantite_disponible2 - 1;
                    $requete_update_dispo = "UPDATE DispoRestau SET qte='$nouvelle_quantite' WHERE nom='$new_command_nom_allo'";
                    $requete_update_dispo2 = "UPDATE HorairesRestau SET qte_dispo='$nouvelle_quantite2' WHERE menu_nom='$new_command_nom_allo' AND heure='$new_command_horaire_allo'";
    
                    if (($conn->query($requete_update_dispo) === TRUE)&&($conn->query($requete_update_dispo2) === TRUE)) {
                        echo <<<HTML
                            <script>
                                document.addEventListener('DOMContentLoaded', function() {
                                    const modal = document.createElement('div');
                                    modal.classList.add('modal');
                                    modal.innerHTML = '<p>Commande passée avec succès!</p>';
                                    document.body.appendChild(modal);
    
                                    setTimeout(function() {
                                        modal.style.display = 'none';
                                        window.location.href = 'allos.html';
                                    }, 3000);
                                });
                            </script>
                            <style>
                                .modal {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    position: fixed;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: rgba(0, 0, 0, 0.5);
                                    color: #fff;
                                    z-index: 1000;
                                }
    
                                .modal p {
                                    background: #333;
                                    padding: 20px;
                                    border-radius: 10px;
                                }
                            </style>
                        HTML;
                        exit();
                    } else {
                        echo <<<HTML
                            <script>
                                document.addEventListener('DOMContentLoaded', function() {
                                    const modal = document.createElement('div');
                                    modal.classList.add('modal');
                                    modal.innerHTML = '<p>Erreur lors de la mise à jour de la quantité disponible</p>';
                                    document.body.appendChild(modal);
    
                                    setTimeout(function() {
                                        modal.style.display = 'none';
                                        window.location.href = 'allos.html';
                                    }, 3000);
                                });
                            </script>
                            <style>
                                .modal {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    position: fixed;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: rgba(0, 0, 0, 0.5);
                                    color: #fff;
                                    z-index: 1000;
                                }
    
                                .modal p {
                                    background: #333;
                                    padding: 20px;
                                    border-radius: 10px;
                                }
                            </style>
                        HTML;
                        exit();
                    }
                } else {
                    echo <<<HTML
                            <script>
                                document.addEventListener('DOMContentLoaded', function() {
                                    const modal = document.createElement('div');
                                    modal.classList.add('modal');
                                    modal.innerHTML = '<p>Erreur lors de l\'ajout</p>';
                                    document.body.appendChild(modal);
    
                                    setTimeout(function() {
                                        modal.style.display = 'none';
                                        window.location.href = 'allos.html';
                                    }, 3000);
                                });
                            </script>
                            <style>
                                .modal {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    position: fixed;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: rgba(0, 0, 0, 0.5);
                                    color: #fff;
                                    z-index: 1000;
                                }
    
                                .modal p {
                                    background: #333;
                                    padding: 20px;
                                    border-radius: 10px;
                                }
                            </style>
                        HTML;
                        exit();
                }
            } else {
                echo <<<HTML
                            <script>
                                document.addEventListener('DOMContentLoaded', function() {
                                    const modal = document.createElement('div');
                                    modal.classList.add('modal');
                                    modal.innerHTML = '<p>Ce allo est en rupture de stock !</p>';
                                    document.body.appendChild(modal);
    
                                    setTimeout(function() {
                                        modal.style.display = 'none';
                                        window.location.href = 'allos.html';
                                    }, 3000);
                                });
                            </script>
                            <style>
                                .modal {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    position: fixed;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: rgba(0, 0, 0, 0.5);
                                    color: #fff;
                                    z-index: 1000;
                                }
    
                                .modal p {
                                    background: #333;
                                    padding: 20px;
                                    border-radius: 10px;
                                }
                            </style>
                        HTML;
                        exit();
            }
        }
    }

    $conn->close();
    
    ?>
</body>

</html>
