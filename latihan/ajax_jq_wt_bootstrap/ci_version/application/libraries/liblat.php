<?php 
/**
 * Dibuat oleh shirokun
 */
class Liblat
{
	
	protected $ci;

    public function __construct()
    {
        $this->ci = &get_instance();
        date_default_timezone_set('Asia/Jakarta');
    }

    public function page($content, $data = null)
    {
        return $this->ci->load->view($content, $data);
    }

    public function to_json($data)
    {
    	echo json_encode($data);
    }

    public function jk($value)
    {
    	switch ($value) {
    		case '1':
    			return "Laki-laki";
    			break;
    		case '2':
    			return "Perempuan";
    			break;
    		
    		default:
    			return "Lainnya";
    			break;
    	}
    }
}