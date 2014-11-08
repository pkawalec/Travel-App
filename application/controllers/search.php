<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Search extends CI_Controller {

    function __construct()
    {
        parent::__construct();
       
    }

    function index()
    {
        //This method will have the search field validation
        $this->load->library('form_validation');

        $this->form_validation->set_rules('search', 'Search', 'trim|required|xss_clean|callback_check_database');

        if($this->form_validation->run() == FALSE)
        {
            //Field validation failed.  User redirected back to page
           redirect('home', 'refresh');
            
        }
        else
        {
            //This will need to call AJAX
           
        }

    }

   
}
?>