var student_email, student_id, student_name, major, final_semester, student_mobile, itp_start_date, itp_start_month, itp_start_year, itp_end_date, itp_end_month, itp_end_year, company_name, company_address, company_postcode, company_state, company_telephone, allowance, supervisor_title, supervisor_first_name, supervisor_last_name, supervisor_designation, supervisor_department, supervisor_contact, supervisor_email;

var student_email_status, student_id_status, student_name_status, major_status, final_semester_status, student_mobile_status, itp_start_status, itp_end_status, company_name_status, company_address_status, company_postcode_status, company_state_status, company_telephone_status, allowance_status, supervisor_title_status, supervisor_first_name_status, supervisor_last_name_status, supervisor_designation_status, supervisor_department_status, supervisor_contact_status, supervisor_email_status;

function page_load(){
    student_email_status = true;
    student_id_status = true;
    student_name_status = true;
    major_status = true;
    final_semester_status = true;
    student_mobile_status = true;
    itp_start_status = true;
    itp_end_status = true;
    company_name_status = true;
    company_address_status = true;
    company_postcode_status = true;
    company_state_status = true;
    company_telephone_status = true;
    allowance_status = true;
    supervisor_first_name_status = true;
    supervisor_last_name_status = true;
    supervisor_designation_status = true;
    supervisor_department_status = true;
    supervisor_contact_status = true;
    supervisor_email_status = true;
    
    check_size();
}

function validate_master(){
    if(student_email_status == false || student_id_status == false || student_name_status == false || major_status == false || final_semester_status == false || student_mobile_status == false || itp_start_status == false || itp_end_status == false || company_name_status == false || company_address_status == false || company_postcode_status == false || company_state_status == false || company_telephone_status == false || allowance_status == false || supervisor_first_name_status == false || supervisor_last_name_status == false || supervisor_designation_status == false || supervisor_department_status == false || supervisor_contact_status == false || supervisor_email_status == false){
        event.preventDefault();
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        event.preventDefault();
        document.getElementById("master_error").innerHTML = "";
    }
}

function check_empty(){
    student_email = document.forms["registration"]["student_email"].value;
    student_id = document.forms["registration"]["student_id"].value;
    student_name = document.forms["registration"]["student_name"].value;
    major = document.forms["registration"]["sm"].value;
    final_semester = document.forms["registration"]["t3"].value;
    student_mobile = document.forms["registration"]["student_mobile"].value;
    itp_start_date = document.forms["registration"]["itp_start_date"].value;
    itp_start_month = document.forms["registration"]["itp_start_month"].value;
    itp_start_year = document.forms["registration"]["itp_start_year"].value;
    itp_end_date = document.forms["registration"]["itp_end_date"].value;
    itp_end_month = document.forms["registration"]["itp_end_month"].value;
    itp_end_year = document.forms["registration"]["itp_end_year"].value;
    company_name = document.forms["registration"]["company_name"].value;
    company_address = document.forms["registration"]["company_address"].value;
    company_postcode = document.forms["registration"]["company_postcode"].value;
    company_state = document.forms["registration"]["company_state"].value;
    company_telephone = document.forms["registration"]["company_telephone"].value;
    allowance = document.forms["registration"]["allowance"].value;
    supervisor_title = document.forms["registration"]["title"].value;
    supervisor_first_name = document.forms["registration"]["supervisor_first_name"].value;
    supervisor_last_name = document.forms["registration"]["supervisor_last_name"].value;
    supervisor_designation = document.forms["registration"]["supervisor_designation"].value;
    supervisor_department = document.forms["registration"]["supervisor_department"].value;
    supervisor_contact = document.forms["registration"]["supervisor_contact"].value;
    supervisor_email = document.forms["registration"]["supervisor_email"].value;
    
    if(student_email == ""){
        event.preventDefault();
        student_email = false;
        document.getElementById("student_email_error").innerHTML = "Please enter your email address.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_student_email();
    }
    
    if(student_id == ""){
        event.preventDefault();
        student_id_status = false;
        document.getElementById("student_id_error").innerHTML = "Please enter you Student ID.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_student_id();
    }
    
    if(student_name == ""){
        event.preventDefault();
        student_name_status = false;
        document.getElementById("student_name_error").innerHTML = "Please enter your full name.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_student_name();
    }
    
    if(major == ""){
        event.preventDefault();
        major_status = false;
        document.getElementById("sm_error").innerHTML = "Please select your major.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_major();
    }
    
    if(final_semester == ""){
        event.preventDefault();
        final_semester_status = false;
        document.getElementById("t3_error").innerHTML = "Please tell us if this is your final semester or not.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_final_semester();
    }
    
    if(student_mobile == ""){
        event.preventDefault();
        student_mobile_status = false;
        document.getElementById("student_mobile_error").innerHTML = "Please enter your phone number.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_student_mobile();
    }
    
    if(itp_start_date == "" || itp_start_date == "none"){
        event.preventDefault();
        document.getElementById("itp_start_error").innerHTML = "Please select the starting date of your ITP.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else if(itp_start_month == "" || itp_start_month == "none"){
        event.preventDefault();
        document.getElementById("itp_start_error").innerHTML = "Please select the starting month of your ITP.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else if(itp_start_year == "" || itp_start_year == "none"){
        event.preventDefault();
        document.getElementById("itp_start_error").innerHTML = "Please select the starting year for your ITP.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else{
        document.getElementById("itp_start_error").innerHTML = "";
    }
    
    if(itp_end_date == "" || itp_end_date == "none"){
        event.preventDefault();
        document.getElementById("itp_end_error").innerHTML = "Please select the date your ITP ends.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else if(itp_end_month == "" || itp_end_month == "none"){
        event.preventDefault();
        document.getElementById("itp_end_error").innerHTML = "Please select the month your ITP ends.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else if(itp_end_year == "" || itp_end_year == "none"){
        event.preventDefault();
        document.getElementById("itp_end_error").innerHTML = "Please select the year your ITP ends.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else{
        document.getElementById("itp_end_error").innerHTML = "";
        validate_dates();
    }
    
    if(company_name == ""){
        event.preventDefault();
        company_name_status = false;
        document.getElementById("company_name_error").innerHTML = "Please enter the name of the company that you are attatched to.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_company_name();
    }
    
    if(company_address == ""){
        event.preventDefault();
        company_address_status = false;
        document.getElementById("company_address_error").innerHTML = "Please enter the company address.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_company_address();
    }
    
    if(company_postcode == ""){
        event.preventDefault();
        company_postcode_status = false;
        document.getElementById("company_postcode_error").innerHTML = "Please enter the company's postcode.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_company_postcode();
    }
    
    if(company_state == ""){
        event.preventDefault();
        company_state_status = false;
        document.getElementById("company_state_error").innerHTML = "Please enter the company's state.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_company_state();
    }
    
    if(company_telephone == ""){
        event.preventDefault();
        company_telephone_status = false;
        document.getElementById("company_telephone_error").innerHTML = "Please enter your company's telephone number.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_company_telephone();
    }
    
    if(allowance == ""){
        event.preventDefault();
        allowance_status = false;
        document.getElementById("allowance_error").innerHTML = "Please enter your allowance. Type in 0 if you do not have any allowance.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_allowance();
    }
    
    if(supervisor_title == ""){
        event.preventDefault();
        supervisor_title_status = false;
        document.getElementById("title_error").innerHTML = "Please select your supervisor's title.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_other_title();
    }
    
    if(supervisor_first_name == ""){
        event.preventDefault();
        supervisor_first_name_status = false;
        document.getElementById("supervisor_first_name_error").innerHTML = "Please enter your supervisor's first name";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_supervisor_first_name();
    }
    
    if(supervisor_last_name == ""){
        event.preventDefault();
        supervisor_last_name_status = false;
        document.getElementById("supervisor_last_name_error").innerHTML = "Please enter your supervisor's last name.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_supervisor_last_name();
    }
    
    if(supervisor_designation == ""){
        event.preventDefault();
        supervisor_designation_status = false;
        document.getElementById("supervisor_designation_error").innerHTML = "Please enter your supervisor's designation.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_supervisor_designation();
    }
    
    if(supervisor_department == ""){
        event.preventDefault();
        supervisor_department_status = false;
        document.getElementById("supervisor_department_error").innerHTML = "Please enter your supervisor's department";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_supervisor_department();
    }
    
    if(supervisor_contact == ""){
        event.preventDefault();
        supervisor_contact_status = false;
        document.getElementById("supervisor_contact_error").innerHTML = "Please enter your supervisor's contact number.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_supervisor_contact();
    }
    
    if(supervisor_email == ""){
        event.preventDefault();
        supervisor_email_status = false;
        document.getElementById("supervisor_email_error").innerHTML = "Please enter your supervisor's email address.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        validate_supervisor_email();
    }
    
    validate_master();
}

function validate_student_email(){
    student_email = document.forms["registration"]["student_email"].value;
    
    if(student_email == ""){
        student_email_status = false;
        document.getElementById("student_email_error").innerHTML = "Please enter your email address.";
    }
    else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(mailformat.test(student_email)){
            student_email_status = true;
            document.getElementById("student_email_error").innerHTML = "";
        }
        else{
            student_email_status = false;
            document.getElementById("student_email_error").innerHTML = "Please enter a valid email address.";
        }
    }
}

function validate_supervisor_email(){
    supervisor_email = document.forms["registration"]["supervisor_email"].value;
    if(supervisor_email == ""){
        supervisor_email_status = false;
        document.getElementById("supervisor_email_error").innerHTML = "Please enter your supervisor's email address.";
    }
    else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(mailformat.test(supervisor_email)){
            supervisor_email_status = true;
            document.getElementById("supervisor_email_error").innerHTML = "";
        }
        else{
            supervisor_email_status = false;
            document.getElementById("supervisor_email_error").innerHTML = "Please enter a valid email address.";
        }
    }
}

function validate_student_id(){
    student_id = document.forms["registration"]["student_id"].value;
    if(student_id == ""){
        student_id_status = false;
        document.getElementById("student_id_error").innerHTML = "Please enter you Student ID.";
    }
    else{
        var numbers = /^[0-9]+$/;
        
        if(student_id.length == 10 && numbers.test(student_id)){
            student_id_status = true;
            document.getElementById("student_id_error").innerHTML = "";
        }
        else{
            student_id_status = false;
            document.getElementById("student_id_error").innerHTML = "Please enter a valid Student ID.";
        }
    }
}

function validate_student_name(){
    student_name = document.forms["registration"]["student_name"].value;
    if(student_name == ""){
        student_name_status = false;
        document.getElementById("student_name_error").innerHTML = "Please enter a valid name.";
    }
    else{
        student_name_status = true;
        document.getElementById("student_name_error").innerHTML = "";
    }
}

function validate_major(){
    major_status = true;
}

function validate_final_semester(){
    final_semester_status = true;
}

function validate_student_mobile(){
    student_mobile = document.forms["registration"]["student_mobile"].value;
    if(student_mobile == ""){
        student_mobile_status = false;
        document.getElementById("student_mobile_error").innerHTML = "Please enter your phone number.";
    }
    else{
        if(!isNaN(student_mobile) && student_mobile.length <= 14 && student_mobile.length >= 6){
            student_mobile_status = true;
            document.getElementById("student_mobile_error").innerHTML = "";
        }
        else{
            student_mobile_status = false;
            document.getElementById("student_mobile_error").innerHTML = "Please enter a valid phone number.";
        }
    }
}

function validate_company_telephone(){
    company_telephone = document.forms["registration"]["company_telephone"].value;
    if(company_telephone == ""){
        company_telephone_status = false;
        document.getElementById("company_telephone_error").innerHTML = "Please enter the company's telephone number.";
    }
    else{
        //var phone_number = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        
        if(company_telephone.length <= 14 && company_telephone.length >= 6 && !isNaN(company_telephone)){
            company_telephone_status = true;
            document.getElementById("company_telephone_error").innerHTML = "";
        }
        else{
            company_telephone_status = false;
            document.getElementById("company_telephone_error").innerHTML = "Please enter a valid telephone number.";
        }
    }
}

function validate_supervisor_contact(){
    supervisor_contact = document.forms["registration"]["supervisor_contact"].value;
    if(supervisor_contact == ""){
        supervisor_contact_status = false;
        document.getElementById("supervisor_contact_error").innerHTML = "Please enter your supervisor's phone number.";
    }
    else{
        if(supervisor_contact.length <= 14 && supervisor_contact.length >= 6 && !isNaN(supervisor_contact)){
            supervisor_contact_status = true;
            document.getElementById("supervisor_contact_error").innerHTML = "";
        }
        else{
            supervisor_contact_status = false;
            document.getElementById("supervisor_contact_error").innerHTML = "Please enter a valid number.";
        }
    }
}

function validate_company_name(){
    company_name = document.forms["registration"]["company_name"].value;
    
    if(company_name == ""){
        company_name_status = false;
        document.getElementById("company_name_error").innerHTML = "Please enter the name of the company that you are attatched to.";
    }
    else{
        company_name_status = true;
        document.getElementById("company_name_error").innerHTML = "";
    }
}

function validate_company_address(){
    company_address = document.forms["registration"]["company_address"].value;
    
    if(company_address == ""){
        company_address_status = false;
        document.getElementById("company_address_error").innerHTML = "Please enter the company address.";
    }
    else{
        company_address_status = true;
        document.getElementById("company_address_error").innerHTML = "";
    }
}

function validate_company_postcode(){
    company_postcode = document.forms["registration"]["company_postcode"].value;
    
    if(company_postcode == ""){
        company_postcode_status = false;
        document.getElementById("company_postcode_error").innerHTML = "Please enter the company's postcode.";
    }
    else{
        if(company_postcode.length == 5 && !isNaN(company_postcode)){
            company_postcode_status = true;
            document.getElementById("company_postcode_error").innerHTML = "";
        }
        else{
            company_postcode_status = false;
            document.getElementById("company_postcode_error").innerHTML = "Please enter a valid postcode.";
        }
    }
}

function validate_company_state(){
    company_state = document.forms["registration"]["company_state"].value;
    
    if(company_state == ""){
        company_state_status = false;
        document.getElementById("company_state_error").innerHTML = "Please enter the company's state.";
    }
    else{
        company_state_status = true;
        document.getElementById("company_state_error").innerHTML = "";
    }
}

function validate_allowance(){
    allowance = document.forms["registration"]["allowance"].value;
    
    if(allowance == ""){
        allowance_status = false;
        document.getElementById("allowance_error").innerHTML = "Please enter your allowance. Type in 0 if you do not have any allowance.";
    }
    else{
        var price_format = /^\d+(?:\.\d{0,2})$/;
        
        if(price_format.test(allowance) || allowance == 0){
            allowance_status = true;
            document.getElementById("allowance_error").innerHTML = "";
        }
        else{
            allowance_status = false;
            document.getElementById("allowance_error").innerHTML = "Please enter a valid value for your allowance.";
        }
    }
}

function validate_other_title(){
    supervisor_title = document.forms["registration"]["other_title"].value;
    
    if(supervisor_title == "" && document.getElementById("otheropt").checked == true){
        supervisor_title_status = false;
        document.getElementById("title_error").innerHTML = "Please enter a title for your supervisor.";
    }
    
    else if(supervisor_title == "" && (document.getElementById("mr").checked == true || document.getElementById("ms").checked == true || document.getElementById("mrs").checked || document.getElementById("dr").checked == true || document.getElementById("prof").checked == true)){
        supervisor_title_status = true;
        document.getElementById("title_error").innerHTML = "";
    }
    
    else if(supervisor_title == "" && document.getElementById("otheropt").checked == false){
        supervisor_title_status = false;
        document.getElementById("title_error").innerHTML = "Please select your supervisor's title.";
    }
    else{
        supervisor_title_status = true;
        document.getElementById("title_error").innerHTML = "";
    }
}

function validate_supervisor_first_name(){
    supervisor_first_name = document.forms["registration"]["supervisor_first_name"].value;
    
    if(supervisor_first_name == ""){
        supervisor_first_name_status = false;
        document.getElementById("supervisor_first_name_error").innerHTML = "Please enter your supervisor's first name";
    }
    else{
        supervisor_first_name_status = true;
        document.getElementById("supervisor_first_name_error").innerHTML = "";
    }
}

function validate_supervisor_last_name(){
    supervisor_last_name = document.forms["registration"]["supervisor_last_name"].value;
    
    if(supervisor_last_name == ""){
        supervisor_last_name_status = false;
        document.getElementById("supervisor_last_name_error").innerHTML = "Please enter your supervisor's last name.";
    }
    else{
        supervisor_last_name_status = true;
        document.getElementById("supervisor_last_name_error").innerHTML = "";
    }
}

function validate_supervisor_designation(){
    supervisor_designation = document.forms["registration"]["supervisor_designation"].value;
    
    if(supervisor_designation == ""){
        supervisor_designation_status = false;
        document.getElementById("supervisor_designation_error").innerHTML = "Please enter your supervisor's designation.";
    }
    else{
        supervisor_designation_status = true;
        document.getElementById("supervisor_designation_error").innerHTML = "";
    }
}

function validate_supervisor_department(){
    supervisor_department = document.forms["registration"]["supervisor_department"].value;
    
    if(supervisor_department == ""){
        supervisor_department_status = false;
        document.getElementById("supervisor_department_error").innerHTML = "Please enter your supervisor's department";
    }
    else{
        supervisor_department_status = true;
        document.getElementById("supervisor_department_error").innerHTML = "";
    }
}

function select_other(){
    supervisor_title = document.forms["registration"]["other_title"].value;
    
    if(supervisor_title == ""){
        supervisor_title_status = false;
        document.getElementById("title_error").innerHTML = "Please enter the title for your supervisor.";
    }
    else{
        document.getElementById("otheropt").checked = true;
        supervisor_title_status = true;
        document.getElementById("title_error").innerHTML = "";
    }
}

function select_title(){
    supervisor_title = document.forms["registration"]["title"].value;
    supervisor_title_status = true;
    document.getElementById("title_error").innerHTML = "";
}

function validate_dates(){
    itp_start_date = document.forms["registration"]["itp_start_date"].value;
    itp_start_month = document.forms["registration"]["itp_start_month"].value;
    itp_start_year = document.forms["registration"]["itp_start_year"].value;
    itp_end_date = document.forms["registration"]["itp_end_date"].value;
    itp_end_month = document.forms["registration"]["itp_end_month"].value;
    itp_end_year = document.forms["registration"]["itp_end_year"].value;
    
    if(itp_end_year < itp_start_year){
        document.getElementById("itp_end_error").innerHTML = "Please select a valid year for the end year of your ITP.";
        itp_start_status = false;
        itp_end_status = false;
    }
    else{
        document.getElementById("itp_end_error").innerHTML = "";
        
        if(itp_end_month < itp_start_month){
            if(itp_end_year == itp_start_year){
                document.getElementById("itp_end_error").innerHTML = "Please select a valid month for the end month of your ITP.";
                itp_start_status = false;
                itp_end_status = false;
            }
            else{
                document.getElementById("itp_end_error").innerHTML = "";
                
                if(itp_start_date == 31){
                    if(itp_start_month == 2 || itp_start_month == 4 || itp_start_month == 6 || itp_start_month == 9 || itp_start_month == 11){
                        document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month.";
                        itp_start_status = false;
                    }
                    else{
                        document.getElementById("itp_start_error").innerHTML = "";
                        itp_start_status = true;
                    }
                }
                else if(itp_start_date == 30){
                    if(itp_start_month == 2){
                        document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month.";
                        itp_start_status = false;
                    }
                    else{
                        document.getElementById("itp_start_error").innerHTML = "";
                        itp_start_status = true;
                    }
                }
                else if(itp_start_date == 29){
                    if(itp_start_month == 2){
                        if(itp_start_year % 4 != 0){
                            document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month.";
                            itp_start_status = false;
                        }
                        else{
                            document.getElementById("itp_start_error").innerHTML = "";
                            itp_start_status = true;
                        }
                    }
                }
                else{
                    document.getElementById("itp_start_error").innerHTML = "";
                    itp_start_status = true;
                }
                
                if(itp_end_date == 31){
                    if(itp_end_month == 2 || itp_end_month == 4 || itp_end_month == 6 || itp_end_month == 9 || itp_end_month == 11){
                        document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month.";
                        itp_end_status = false;
                    }
                    else{
                        document.getElementById("itp_end_error").innerHTML = "";
                        itp_end_status = true;
                    }
                }
                else if(itp_end_date == 30){
                    if(itp_end_month == 2){
                        document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month.";
                        itp_end_status = false;
                    }
                    else{
                        document.getElementById("itp_end_error").innerHTML = "";
                        itp_end_status = true;
                    }
                }
                else if(itp_end_date == 29){
                    if(itp_end_month == 2){
                        if(itp_end_year % 4 != 0){
                            document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month.";
                            itp_end_status = false;
                        }
                        else{
                            document.getElementById("itp_end_error").innerHTML = "";
                            itp_end_status = true;
                        }
                    }
                }
                else{
                    document.getElementById("itp_end_error").innerHTML = "";
                    itp_end_status = true;
                }
            }
        }
        else{
            document.getElementById("itp_end_error").innerHTML = "";
            
            if(itp_start_date == 31){
                if(itp_start_month == 2 || itp_start_month == 4 || itp_start_month == 6 || itp_start_month == 9 || itp_start_month == 11){
                    document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month.";
                    itp_start_status = false;
                }
                else{
                    document.getElementById("itp_start_error").innerHTML = "";
                    itp_start_status = true;
                }
            }
            else if(itp_start_date == 30){
                if(itp_start_month == 2){
                    document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month.";
                    itp_start_status = false;
                }
                else{
                    document.getElementById("itp_start_error").innerHTML = "";
                    itp_start_status = true;
                }
            }
            else if(itp_start_date == 29){
                if(itp_start_month == 2){
                    if(itp_start_year % 4 != 0){
                        document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month.";
                        itp_start_status = false;
                    }
                    else{
                        document.getElementById("itp_start_error").innerHTML = "";
                        itp_start_status = true;
                    }
                }
            }
            else{
                document.getElementById("itp_start_error").innerHTML = "";
                itp_start_status = true;
            }
            
            if(itp_end_date == 31){
                if(itp_end_month == 2 || itp_end_month == 4 || itp_end_month == 6 || itp_end_month == 9 || itp_end_month == 11){
                    document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month.";
                    itp_end_status = false;
                }
                else{
                    document.getElementById("itp_end_error").innerHTML = "";
                    itp_end_status = true;
                }
            }
            else if(itp_end_date == 30){
                if(itp_end_month == 2){
                    document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month.";
                    itp_end_status = false;
                }
                else{
                    document.getElementById("itp_end_error").innerHTML = "";
                    itp_end_status = true;
                }
            }
            else if(itp_end_date == 29){
                if(itp_end_month == 2){
                    if(itp_end_year % 4 != 0){
                        document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month.";
                        itp_end_status = false;
                    }
                    else{
                        document.getElementById("itp_end_error").innerHTML = "";
                        itp_end_status = true;
                    }
                }
            }
            else{
                document.getElementById("itp_end_error").innerHTML = "";
                itp_end_status = true;
            }
        }
    }
}

function check_size(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
     if(width < 601){
           $("#proceed_section").removeClass("proceed_section");
           $("#proceed_section").addClass("proceed_section_mobile");
       }
       else{
           $("#proceed_section").removeClass("proceed_section_mobile");
           $("#proceed_section").addClass("proceed_section");
       }
}

function cancel(){
    window.history.back();
}
