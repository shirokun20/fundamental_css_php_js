<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Awal extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        redirect(site_url('awal/datanya/'), 'refresh');
    }

    public function datanya()
    {
        $data = array(
            'judul' => 'Contoh tabel dengan ajax codeigniter (bukan datatables)',
        );
        $this->liblat->page('vData', $data);
    }

    public function listData()
    {
        $q    = $this->mod_user->datanya(5);
        $json = array();
        if ($q->num_rows() == true) {
            $status = 'ada';
            foreach ($q->result() as $key) {
            	$r = array();
            	$r['nama'] = ucwords($key->nama);
            	$r['email'] = $key->email;
            	$r['type_name'] = $key->type_name;
            	$r['gender'] = $this->liblat->jk($key->gender);
            	$json[] = $r;
            }
        } else {
            $status = 'tidak_ada';
        }

        $this->liblat->to_json(array(
            'status'       => $status,
            'data'         => $json,
            'jumlah'       => $q->num_rows(),
            'jumlah_total' => $this->mod_user->datanya()->num_rows(),
        ));
    }
}

/* End of file Awal.php */
/* Location: ./application/controllers/Awal.php */
