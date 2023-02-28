<?php

namespace DLM\Shortcode;

class Init
{
    public function __construct()
    {
        add_shortcode('dafunda-load-more', [$this, 'setup']);
    }

    public function setup($params)
    {
        if ($params) $params = implode(", ", $params);
        // $message = "Datang dari shortcode DLM [$params]";
        // return $message;

        return $this->draw($params);
    }

    public function draw($params)
    {
        ob_start();
        require __DIR__ . "\draw.php";
        return ob_get_clean();
    }
}
