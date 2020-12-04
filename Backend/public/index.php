<?php

use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../bootstrap.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

$app = AppFactory::create();

$routes = require __DIR__.'/../router.php';

$routes($app);

$app->run();