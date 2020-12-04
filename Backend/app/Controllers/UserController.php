<?php

namespace App\Controllers;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use Firebase\JWT\JWT;

use App\Models\Utilisateur;

class UserController
{

    public function login(Request $request, Response $response, array $args): Response
    {
        global $entityManager;
        $data = $request->getParsedBody();

        $login = $data["login"] ?? "";
        $password = $data["password"] ?? "";

        $utilisateurRepository = $entityManager->getRepository('utilisateur');
        $utilisateur = $utilisateurRepository->findOneBy(array('login' => $login, 'password' => $password));
        if ($utilisateur and $login == $utilisateur->getLogin() and $password == $utilisateur->getPassword()) {
            $data = array('nom' => $utilisateur->getNom(), 'prenom' => $utilisateur->getPrenom());
            $dateNow = time();

        $issuedAt = time();

        $payload = [
            "user" => $data,
            "iat" => $issuedAt,
            "exp" => $issuedAt + 60 // 60 secondes
        ];

        $token_jwt = JWT::encode($payload, $_ENV["JWT_SECRET"], "HS256");

        $response->getBody()->write(json_encode([
            "success" => true,
            "user" => $data
        ]));
        return $response
            ->withHeader("Authorization", $token_jwt)
            ->withHeader("Content-Type", "application/json");
    } 
    else{
        $response->getBody()->write(json_encode([
            "success" => false
        ]));
        return $response->withHeader("Content-Type", "application/json");

        }
    }

    public function register(Request $request, Response $response, array $args): Response
    {
        global $entityManager;
        $user = $request->getParsedBody();
        $user = json_decode($user["client"], true);

        $result = [
            "success" => true,
            "user" => $user
        ];

        $entityManager->getConnection()->beginTransaction();

        try{
            $utilisateur = new utilisateur;
            $utilisateur->setNom($user["nom"]);
            $utilisateur->setPrenom($user["prenom"]);
            $utilisateur->setAdresse($user["adresse"]);
            $utilisateur->setCodePostal($user["codePostal"]);
            $utilisateur->setVille($user["ville"]);
            $utilisateur->setTelephone($user["telephone"]);
            $utilisateur->setMail($user["mail"]);
            $utilisateur->setCivilite($user["civilite"]);
            $utilisateur->setLogin($user["login"]);
            $utilisateur->setPassword($user["password"]);
            $entityManager->persist($utilisateur);
            $entityManager->flush();
            $entityManager->getConnection()->commit();
        }
        catch(Exception $excep){
            $entityManager->getConnection()->rollback();
            throw $excep;
        }

        

        $response->getBody()->write(json_encode($result));
        return $response->withHeader("Content-Type", "application/json");
    }

}