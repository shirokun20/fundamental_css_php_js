<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Mod_user extends CI_Model
{
    private $tabel_v = 'vuser';

    public function _cari()
    {
        $mencari = $this->input->get_post('mencari');
        $gender  = $this->input->get_post('gender');
        if ($mencari != null) {
            $this->db->like('nama', $mencari);
            if ($gender != null) {
                $this->db->where('gender', $gender);
            }
            $this->db->or_like('email', $mencari);
            if ($gender != null) {
                $this->db->where('gender', $gender);
            }
            $this->db->or_like('type_name', $mencari);
            if ($gender != null) {
                $this->db->where('gender', $gender);
            }
        }else{
        	if ($gender != null) {
                $this->db->where('gender', $gender);
            }
        }
    }

    public function datanya($limit = null)
    {
        $this->_cari();
        if ($limit != null) {
            $this->db->limit($limit);
        }
        return $this->db->get($this->tabel_v);
    }
}

/* End of file Mod_user.php */
/* Location: ./application/models/custom/Mod_user.php */
