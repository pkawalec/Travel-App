<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {

    function __construct()
    {
        parent::__construct();
    }

    function index()
    {
        $this->load->helper(array('form'));
        $this->load->view('login_view');
    }

  
  function signup(){
    $this->load->view('signup_view');
  }
  
  function verifySignup()
    {
        //This method will have the fields validation
        $this->load->library('form_validation');

        $this->form_validation->set_rules('username', 'Username', 'trim|required|xss_clean');
        $this->form_validation->set_rules('password', 'Password', 'trim|required|xss_clean');

        if($this->form_validation->run() == FALSE)
        {
            //Field validation failed.  User redirected to signup page
            $this->load->view('signup_view');
        }
        else
        {
          $data = array(
            'username' => $this->input->post('username'),
            'password' => MD5($this->input->post('password'))
          );
          $this->db->insert('users', $data);
          $this->load->view('login_view');
        }

    }

}

?>