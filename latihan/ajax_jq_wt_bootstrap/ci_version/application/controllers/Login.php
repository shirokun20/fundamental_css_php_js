<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{

    private function harusDibaca()
    {
        $baca = 'Harus dibaca dulu';
        $baca .= 'Modelnya di load di autoload.php';
        $baca .= 'liblat adalah libarary yang anam buat sendiri diload di autoload.php';
        $baca .= 'autoload.php ada di folder config/autoload.php';
    }

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $data = array(
            'judul' => 'Contoh Login dengan ajax',
        );
        $this->liblat->page('vLogin', $data);
    }

    protected function __validasi()
    {

    }
}

/* End of file Login.php */
/* Location: ./application/controllers/Login.php */
