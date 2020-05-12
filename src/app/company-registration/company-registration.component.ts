import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {

    isReadOnly = true
    other_title_field = ''

    student_email_status = false
    student_id_status = false
    student_name_status = false
    major_status = false
    final_semester_status = false
    student_mobile_status = false
    itp_start_status = false
    itp_end_status = false
    company_name_status = false
    company_address_status = false
    company_postcode_status = false
    company_state_status = false
    company_telephone_status = false
    allowance_status = false
    supervisor_title_status = false
    supervisor_first_name_status = false
    supervisor_last_name_status = false
    supervisor_designation_status = false
    supervisor_department_status = false
    supervisor_contact_status = false
    supervisor_email_status = false
    
    student_email = ""
    student_id = ""
    student_name = ""
    major = ""
    final_semester = ""
    student_mobile = ""
    itp_start_date = ""
    itp_start_month = ""
    itp_start_year = ""
    itp_end_date = ""
    itp_end_month = ""
    itp_end_year = ""
    company_name = ""
    company_address = ""
    company_postcode = ""
    company_state = ""
    company_telephone = ""
    allowance = ""
    supervisor_first_name = ""
    supervisor_last_name = ""
    supervisor_designation = ""
    supervisor_department = ""
    supervisor_contact = ""
    supervisor_email = ""
    supervisor_title = ""

    constructor() { }

    ngOnInit(): void {
        var width = window.innerWidth;
        
        //document.getElementById("width").innerHTML = width;
        
    if(width < 410){
            $("#proceed_section").removeClass("proceed_section")
            $("#proceed_section").addClass("proceed_section_mobile")
        }
    }

    onResize(event) {
        this.check_resize()
    }

    startDateChange(event: any) {
        this.itp_start_date = event.target.value

        this.removeStartDateError()
    }

    startMonthChange(event: any) {
        this.itp_start_month = event.target.value

        this.removeStartDateError()
    }

    startYearChange(event: any) {
        this.itp_start_year = event.target.value

        this.removeStartDateError()
    }

    endDateChange(event: any) {
        this.itp_end_date = event.target.value

        this.removeEndDateError()
    }

    endMonthChange(event: any) {
        this.itp_end_month = event.target.value

        this.removeEndDateError()
    }

    endYearChange(event: any) {
        this.itp_end_year = event.target.value

        this.removeEndDateError()
    }

    removeStartDateError(): void {
        document.getElementById("itp_start_error").innerHTML = ""
    }

    removeEndDateError(): void {
        document.getElementById("itp_end_error").innerHTML = ""
    }

    check_resize(): void {
        var width = window.innerWidth;
        
        //document.getElementById("width").innerHTML = width;
        
        if(width < 410){
            $("#proceed_section").removeClass("proceed_section")
            $("#proceed_section").addClass("proceed_section_mobile")
        }
        else{
            $("#proceed_section").removeClass("proceed_section_mobile")
            $("#proceed_section").addClass("proceed_section")
        }
    }

    check_empty(data){
        this.student_email = data.student_email
        this.student_id = data.student_id
        this.student_name = data.student_name
        this.major = data.sm
        this.final_semester = data.t3
        this.student_mobile = data.student_mobile
        this.company_name = data.company_name
        this.company_address = data.company_address
        this.company_postcode = data.company_postcode
        this.company_state = data.company_state
        this.company_telephone = data.company_telephone
        this.allowance = data.allowance
        //this.supervisor_title = data.title
        this.supervisor_first_name = data.supervisor_first_name
        this.supervisor_last_name = data.supervisor_last_name
        this.supervisor_designation = data.supervisor_designation
        this.supervisor_department = data.supervisor_department
        this.supervisor_contact = data.supervisor_contact
        this.supervisor_email = data.supervisor_email
        
        if(this.student_email == ""){
            event.preventDefault();
            document.getElementById("student_email_error").innerHTML = "Please enter your email address."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_student_email(data)
        }
        
        if(this.student_id == ""){
            event.preventDefault()
            document.getElementById("student_id_error").innerHTML = "Please enter you Student ID."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_student_id(data)
        }
        
        if(this.student_name == ""){
            event.preventDefault()
            document.getElementById("student_name_error").innerHTML = "Please enter your full name."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_student_name(data)
        }
        
        if(this.major == ""){
            event.preventDefault()
            document.getElementById("sm_error").innerHTML = "Please select your major."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_major(data)
        }
        
        if(this.final_semester == ""){
            event.preventDefault()
            document.getElementById("t3_error").innerHTML = "Please tell us if this is your final semester or not."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_final_semester(data)
        }
        
        if(this.student_mobile == ""){
            event.preventDefault()
            document.getElementById("student_mobile_error").innerHTML = "Please enter your phone number."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_student_mobile(data)
        }
        
        if(this.itp_start_date == "" || this.itp_start_date == "none"){
            event.preventDefault()
            document.getElementById("itp_start_error").innerHTML = "Please select the starting date of your ITP."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else if(this.itp_start_month == "" || this.itp_start_month == "none"){
            event.preventDefault()
            document.getElementById("itp_start_error").innerHTML = "Please select the starting month of your ITP."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else if(this.itp_start_year == "" || this.itp_start_year == "none"){
            event.preventDefault()
            document.getElementById("itp_start_error").innerHTML = "Please select the starting year for your ITP."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            document.getElementById("itp_start_error").innerHTML = ""
        }
        
        if(this.itp_end_date == "" || this.itp_end_date == "none"){
            event.preventDefault()
            document.getElementById("itp_end_error").innerHTML = "Please select the date your ITP ends."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else if(this.itp_end_month == "" || this.itp_end_month == "none"){
            event.preventDefault()
            document.getElementById("itp_end_error").innerHTML = "Please select the month your ITP ends."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else if(this.itp_end_year == "" || this.itp_end_year == "none"){
            event.preventDefault()
            document.getElementById("itp_end_error").innerHTML = "Please select the year your ITP ends."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            document.getElementById("itp_end_error").innerHTML = ""
            this.validate_dates()
        }
        
        if(this.company_name == ""){
            event.preventDefault()
            document.getElementById("company_name_error").innerHTML = "Please enter the name of the company that you are attatched to."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_company_name(data)
        }
        
        if(this.company_address == ""){
            event.preventDefault()
            document.getElementById("company_address_error").innerHTML = "Please enter the company address."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_company_address(data);
        }
        
        if(this.company_postcode == ""){
            event.preventDefault()
            document.getElementById("company_postcode_error").innerHTML = "Please enter the company's postcode."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_company_postcode(data)
        }
        
        if(this.company_state == ""){
            event.preventDefault()
            document.getElementById("company_state_error").innerHTML = "Please enter the company's state."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_company_state(data)
        }
        
        if(this.company_telephone == ""){
            event.preventDefault()
            document.getElementById("company_telephone_error").innerHTML = "Please enter your company's telephone number."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_company_telephone(data)
        }
        
        if(this.allowance == ""){
            event.preventDefault()
            document.getElementById("allowance_error").innerHTML = "Please enter your allowance. Type in 0 if you do not have any allowance."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_allowance(data)
        }
        
        if(this.supervisor_title_status == false){
            event.preventDefault()
            document.getElementById("title_error").innerHTML = "Please select your supervisor's title."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        
        if(this.supervisor_first_name == ""){
            event.preventDefault()
            document.getElementById("supervisor_first_name_error").innerHTML = "Please enter your supervisor's first name."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_supervisor_first_name(data);
        }
        
        if(this.supervisor_last_name == ""){
            event.preventDefault()
            document.getElementById("supervisor_last_name_error").innerHTML = "Please enter your supervisor's last name."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_supervisor_last_name(data)
        }
        
        if(this.supervisor_designation == ""){
            event.preventDefault()
            document.getElementById("supervisor_designation_error").innerHTML = "Please enter your supervisor's designation."
            document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        }
        else{
            this.validate_supervisor_designation(data)
        }
        
        if(this.supervisor_department == ""){
            event.preventDefault()
            document.getElementById("supervisor_department_error").innerHTML = "Please enter your supervisor's department"
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_supervisor_department(data)
        }
        
        if(this.supervisor_contact == ""){
            event.preventDefault()
            document.getElementById("supervisor_contact_error").innerHTML = "Please enter your supervisor's contact number."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_supervisor_contact(data)
        }
        
        if(this.supervisor_email == ""){
            event.preventDefault()
            document.getElementById("supervisor_email_error").innerHTML = "Please enter your supervisor's email address."
            document.getElementById("master_error").innerHTML = "Please enter all the required details."
        }
        else{
            this.validate_supervisor_email(data)
        }
        
        this.validate_master()
    }

    validate_student_email(data): void {
        this.student_email = data.student_email
        
        if(this.student_email == ""){
            this.student_email_status = false
            document.getElementById("student_email_error").innerHTML = "Please enter your email address."
        }
        else{
           var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            
            if(mailformat.test(this.student_email)){
                if(this.student_email.indexOf("@student.mmu.edu.my", this.student_email.length - "@student.mmu.edu.my".length) !== -1){
                    this.student_email_status = true
                    document.getElementById("student_email_error").innerHTML = ""
                }
                else{
                    document.getElementById("student_email_error").innerHTML = "You must have an MMU student email address in order to continue."
                }
            }
            else{
                this.student_email_status = false
                document.getElementById("student_email_error").innerHTML = "Please enter a valid email address."
            }
        }
    }
    
    validate_supervisor_email(data): void {
        this.supervisor_email = data.supervisor_email
        if(this.supervisor_email == ""){
            this.supervisor_email_status = false
            document.getElementById("supervisor_email_error").innerHTML = "Please enter your supervisor's email address."
        }
        else{
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            
            if(mailformat.test(this.supervisor_email)){
                this.supervisor_email_status = true
                document.getElementById("supervisor_email_error").innerHTML = ""
            }
            else{
                this.supervisor_email_status = false
                document.getElementById("supervisor_email_error").innerHTML = "Please enter a valid email address."
            }
        }
    }
    
    validate_student_id(data): void {
        this.student_id = data.student_id
        if(this.student_id == ""){
            this.student_id_status = false
            document.getElementById("student_id_error").innerHTML = "Please enter you Student ID."
        }
        else{
            var numbers = /^[0-9]+$/
            
            if(this.student_id.length == 10 && numbers.test(this.student_id)){
                this.student_id_status = true
                document.getElementById("student_id_error").innerHTML = ""
            }
            else{
                this.student_id_status = false
                document.getElementById("student_id_error").innerHTML = "Please enter a valid Student ID."
            }
        }
    }
    
    validate_student_name(data): void {
        this.student_name = data.student_name

        if(this.student_name == ""){
            this.student_name_status = false
            document.getElementById("student_name_error").innerHTML = "Please enter a valid name."
        }
        else{
            this.student_name_status = true
            document.getElementById("student_name_error").innerHTML = ""
        }
    }

    validate_major(data): void {
        this.major_status = true

        document.getElementById("sm_error").innerHTML = ""
    }
    
    validate_final_semester(data): void {
        this.final_semester_status = true

        document.getElementById("t3_error").innerHTML = ""
    }
    
    validate_student_mobile(data): void {
        this.student_mobile = data.student_mobile

        if(this.student_mobile == ""){
            this.student_mobile_status = false
            document.getElementById("student_mobile_error").innerHTML = "Please enter your phone number."
        }
        else{
            if(!isNaN(Number(this.student_mobile)) && this.student_mobile.length <= 14 && this.student_mobile.length >= 6){
                this.student_mobile_status = true
                document.getElementById("student_mobile_error").innerHTML = ""
            }
            else{
                this.student_mobile_status = false
                document.getElementById("student_mobile_error").innerHTML = "Please enter a valid phone number."
            }
        }
    }

    validate_company_telephone(data): void {
        this.company_telephone = data.company_telephone

        if(this.company_telephone == ""){
            this.company_telephone_status = false
            document.getElementById("company_telephone_error").innerHTML = "Please enter the company's telephone number."
        }
        else{
            if(this.company_telephone.length <= 14 && this.company_telephone.length >= 6 && !isNaN(Number(this.company_telephone))){
                this.company_telephone_status = true
                document.getElementById("company_telephone_error").innerHTML = ""
            }
            else{
                this.company_telephone_status = false
                document.getElementById("company_telephone_error").innerHTML = "Please enter a valid telephone number."
            }
        }
    }

    validate_supervisor_contact(data): void {
        this.supervisor_contact = data.supervisor_contact

        if(this.supervisor_contact == ""){
            this.supervisor_contact_status = false
            document.getElementById("supervisor_contact_error").innerHTML = "Please enter your supervisor's phone number."
        }
        else{
            if(this.supervisor_contact.length <= 14 && this.supervisor_contact.length >= 6 && !isNaN(Number(this.supervisor_contact))){
                this.supervisor_contact_status = true
                document.getElementById("supervisor_contact_error").innerHTML = ""
            }
            else{
                this.supervisor_contact_status = false
                document.getElementById("supervisor_contact_error").innerHTML = "Please enter a valid number."
            }
        }
    }
    
    validate_company_name(data): void {
        this.company_name = data.company_name
        
        if(this.company_name == ""){
            this.company_name_status = false
            document.getElementById("company_name_error").innerHTML = "Please enter the name of the company that you are attatched to."
        }
        else{
            this.company_name_status = true
            document.getElementById("company_name_error").innerHTML = ""
        }
    }

    validate_company_address(data): void {
        this.company_address = data.company_address
        
        if(this.company_address == ""){
            this.company_address_status = false
            document.getElementById("company_address_error").innerHTML = "Please enter the company address."
        }
        else{
            this.company_address_status = true
            document.getElementById("company_address_error").innerHTML = ""
        }
    }

    validate_company_postcode(data): void {
        this.company_postcode = data.company_postcode
        
        if(this.company_postcode == ""){
            this.company_postcode_status = false
            document.getElementById("company_postcode_error").innerHTML = "Please enter the company's postcode."
        }
        else{
            if(this.company_postcode.length == 5 && !isNaN(Number(this.company_postcode))){
                this.company_postcode_status = true
                document.getElementById("company_postcode_error").innerHTML = ""
            }
            else{
                this.company_postcode_status = false
                document.getElementById("company_postcode_error").innerHTML = "Please enter a valid postcode."
            }
        }
    } 
    
    validate_company_state(data): void {
        this.company_state = data.company_state
        
        if(this.company_state == ""){
            this.company_state_status = false
            document.getElementById("company_state_error").innerHTML = "Please enter the company's state."
        }
        else{
            this.company_state_status = true
            document.getElementById("company_state_error").innerHTML = ""
        }
    }

    validate_allowance(data): void {
        this.allowance = data.allowance
        
        if(this.allowance == ""){
            this.allowance_status = false
            document.getElementById("allowance_error").innerHTML = "Please enter your allowance. Type in 0 if you do not have any allowance."
        }
        else{
            var price_format = /^\d+(?:\.\d{0,2})$/
            
            if(price_format.test(this.allowance) || Number(this.allowance) == 0){
                this.allowance_status = true
                document.getElementById("allowance_error").innerHTML = ""
            }
            else{
                this.allowance_status = false;
                document.getElementById("allowance_error").innerHTML = "Please enter a valid value for your allowance."
            }
        }
    }
    
    validate_other_title(data): void {
        this.supervisor_title = data.other_title
        
        if(this.supervisor_title == "" && data.otheropt.checked == true){
            this.supervisor_title_status = false
            document.getElementById("title_error").innerHTML = "Please enter a title for your supervisor."
        }
        
        else if(this.supervisor_title == "" && (data.mr.checked == true || data.ms.checked == true || data.mrs.checked || data.dr.checked == true || data.prof.checked == true)){
            this.supervisor_title_status = true
            document.getElementById("title_error").innerHTML = ""
        }
        
        else if(this.supervisor_title == "" && data.otheropt.checked == false){
            this.supervisor_title_status = false
            document.getElementById("title_error").innerHTML = "Please select your supervisor's title."
        }
        else{
            this.supervisor_title_status = true
            document.getElementById("title_error").innerHTML = ""
        }
    }
    
    validate_supervisor_first_name(data): void {
        this.supervisor_first_name = data.supervisor_first_name
        
        if(this.supervisor_first_name == ""){
            this.supervisor_first_name_status = false
            document.getElementById("supervisor_first_name_error").innerHTML = "Please enter your supervisor's first name."
        }
        else{
            this.supervisor_first_name_status = true
            document.getElementById("supervisor_first_name_error").innerHTML = ""
        }
    }
    
    validate_supervisor_last_name(data): void {
        this.supervisor_last_name = data.supervisor_last_name
        
        if(this.supervisor_last_name == ""){
            this.supervisor_last_name_status = false
            document.getElementById("supervisor_last_name_error").innerHTML = "Please enter your supervisor's last name."
        }
        else{
            this.supervisor_last_name_status = true
            document.getElementById("supervisor_last_name_error").innerHTML = ""
        }
    }

    validate_supervisor_designation(data): void {
        this.supervisor_designation = data.supervisor_designation
        
        if(this.supervisor_designation == ""){
            this.supervisor_designation_status = false
            document.getElementById("supervisor_designation_error").innerHTML = "Please enter your supervisor's designation."
        }
        else{
            this.supervisor_designation_status = true
            document.getElementById("supervisor_designation_error").innerHTML = ""
        }
    }

    validate_supervisor_department(data): void {
        this.supervisor_department = data.supervisor_department
        
        if(this.supervisor_department == ""){
            this.supervisor_department_status = false
            document.getElementById("supervisor_department_error").innerHTML = "Please enter your supervisor's department"
        }
        else{
            this.supervisor_department_status = true
            document.getElementById("supervisor_department_error").innerHTML = ""
        }
    }

    select_other(data): void {
        this.supervisor_title = data.other_title

        this.isReadOnly = false
        
        if(this.supervisor_title == ""){
            this.supervisor_title_status = false
            document.getElementById("title_error").innerHTML = "Please enter the title for your supervisor."
        }
        else{
            this.supervisor_title_status = true
            document.getElementById("title_error").innerHTML = ""
        }
    }
    
    select_title(data): void {
        this.supervisor_title_status = true
        this.isReadOnly = true
        this.other_title_field = ''
        document.getElementById("title_error").innerHTML = ""
    }

    validate_dates(): void {
        if(Number(this.itp_end_year) < Number(this.itp_start_year)){
            document.getElementById("itp_end_error").innerHTML = "Please select a valid year for the end year of your ITP."
            this.itp_start_status = false
            this.itp_end_status = false
        }
        else{
            document.getElementById("itp_end_error").innerHTML = ""
            
            if(Number(this.itp_end_month) < Number(this.itp_start_month)){
                if(Number(this.itp_end_year) == Number(this.itp_start_year)){
                    document.getElementById("itp_end_error").innerHTML = "Please select a valid month for the end month of your ITP."
                    this.itp_start_status = false
                    this.itp_end_status = false
                }
                else{
                    if((Number(this.itp_end_date) < Number(this.itp_start_date)) && (Number(this.itp_start_month) == Number(this.itp_end_month)) && (Number(this.itp_end_year) == Number(this.itp_start_year))) {
                        document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the end of your ITP."
                        this.itp_start_status = false
                        this.itp_end_status = false
                    }
                    else {
                        document.getElementById("itp_end_error").innerHTML = ""
                        
                        if(Number(this.itp_start_date) == 31){
                            if(Number(this.itp_start_month) == 2 || Number(this.itp_start_month) == 4 || Number(this.itp_start_month) == 6 || Number(this.itp_start_month) == 9 || Number(this.itp_start_month) == 11){
                                document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month."
                                this.itp_start_status = false
                            }
                            else{
                                document.getElementById("itp_start_error").innerHTML = ""
                                this.itp_start_status = true
                            }
                        }
                        else if(Number(this.itp_start_date) == 30){
                            if(Number(this.itp_start_month) == 2){
                                document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month."
                                this.itp_start_status = false
                            }
                            else{
                                document.getElementById("itp_start_error").innerHTML = ""
                                this.itp_start_status = true
                            }
                        }
                        else if(Number(this.itp_start_date) == 29){
                            if(Number(this.itp_start_month) == 2){
                                if(Number(this.itp_start_year) % 4 != 0){
                                    document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month."
                                    this.itp_start_status = false
                                }
                                else{
                                    document.getElementById("itp_start_error").innerHTML = ""
                                    this.itp_start_status = true
                                }
                            }
                        }
                        else{
                            document.getElementById("itp_start_error").innerHTML = ""
                            this.itp_start_status = true
                        }
                        
                        if(Number(this.itp_end_date) == 31){
                            if(Number(this.itp_end_month) == 2 || Number(this.itp_end_month) == 4 || Number(this.itp_end_month) == 6 || Number(this.itp_end_month) == 9 || Number(this.itp_end_month) == 11){
                                document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month.";
                                this.itp_end_status = false
                            }
                            else{
                                document.getElementById("itp_end_error").innerHTML = ""
                                this.itp_end_status = true
                            }
                        }
                        else if(Number(this.itp_end_date) == 30){
                            if(Number(this.itp_end_month) == 2){
                                document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month."
                                this.itp_end_status = false
                            }
                            else{
                                document.getElementById("itp_end_error").innerHTML = ""
                                this.itp_end_status = true
                            }
                        }
                        else if(Number(this.itp_end_date) == 29){
                            if(Number(this.itp_end_month) == 2){
                                if(Number(this.itp_end_year) % 4 != 0){
                                    document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month."
                                    this.itp_end_status = false
                                }
                                else{
                                    document.getElementById("itp_end_error").innerHTML = ""
                                    this.itp_end_status = true
                                }
                            }
                        }
                        else{
                            document.getElementById("itp_end_error").innerHTML = ""
                            this.itp_end_status = true
                        }
                    }
                }
            }
            else{
                if((Number(this.itp_end_date) < Number(this.itp_start_date)) && (Number(this.itp_start_month) == Number(this.itp_end_month)) && (Number(this.itp_end_year) == Number(this.itp_start_year))) {
                    document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the end of your ITP."
                    this.itp_start_status = false
                    this.itp_end_status = false
                }
                else {
                    document.getElementById("itp_end_error").innerHTML = ""
                    
                    if(Number(this.itp_start_date) == 31){
                        if(Number(this.itp_start_month) == 2 || Number(this.itp_start_month) == 4 || Number(this.itp_start_month) == 6 || Number(this.itp_start_month) == 9 || Number(this.itp_start_month) == 11){
                            document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month."
                            this.itp_start_status = false
                        }
                        else{
                            document.getElementById("itp_start_error").innerHTML = ""
                            this.itp_start_status = true
                        }
                    }
                    else if(Number(this.itp_start_date) == 30){
                        if(Number(this.itp_start_month) == 2){
                            document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month."
                            this.itp_start_status = false
                        }
                        else{
                            document.getElementById("itp_start_error").innerHTML = ""
                            this.itp_start_status = true
                        }
                    }
                    else if(Number(this.itp_start_date) == 29){
                        if(Number(this.itp_start_month) == 2){
                            if(Number(this.itp_start_year) % 4 != 0){
                                document.getElementById("itp_start_error").innerHTML = "Please select a valid date for the month."
                                this.itp_start_status = false
                            }
                            else{
                                document.getElementById("itp_start_error").innerHTML = ""
                                this.itp_start_status = true
                            }
                        }
                    }
                    else{
                        document.getElementById("itp_start_error").innerHTML = ""
                        this.itp_start_status = true
                    }
                    
                    if(Number(this.itp_end_date) == 31){
                        if(Number(this.itp_end_month) == 2 || Number(this.itp_end_month) == 4 || Number(this.itp_end_month) == 6 || Number(this.itp_end_month) == 9 || Number(this.itp_end_month) == 11){
                            document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month."
                            this.itp_end_status = false
                        }
                        else{
                            document.getElementById("itp_end_error").innerHTML = ""
                            this.itp_end_status = true
                        }
                    }
                    else if(Number(this.itp_end_date) == 30){
                        if(Number(this.itp_end_month) == 2){
                            document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month."
                            this.itp_end_status = false
                        }
                        else{
                            document.getElementById("itp_end_error").innerHTML = ""
                            this.itp_end_status = true
                        }
                    }
                    else if(Number(this.itp_end_date) == 29){
                        if(Number(this.itp_end_month) == 2){
                            if(Number(this.itp_end_year) % 4 != 0){
                                document.getElementById("itp_end_error").innerHTML = "Please select a valid date for the month."
                                this.itp_end_status = false
                            }
                            else{
                                document.getElementById("itp_end_error").innerHTML = ""
                                this.itp_end_status = true
                            }
                        }
                    }
                    else{
                        document.getElementById("itp_end_error").innerHTML = ""
                        this.itp_end_status = true
                    }
                }
            }
        }
    }
    
    validate_master(): void {
        console.log(this.student_email_status + " " + this.student_id_status + " " + this.student_name_status + " " + this.major_status + " " + this.final_semester_status + " " + this.student_mobile_status + " " + this.itp_start_status + " " + this.itp_end_status + " " + this.company_name_status + " " + this.company_address_status + " " + this.company_postcode_status + " " + this.company_state_status + " " + this.company_telephone_status + " " + this.allowance_status + " " + this.supervisor_title_status + " " + this.supervisor_first_name_status + " " + this.supervisor_last_name_status + " " + this.supervisor_designation_status + " " + this.supervisor_department_status + " " + this.supervisor_contact_status + " " + this.supervisor_email_status)

        if(this.student_email_status == false || this.student_id_status == false || this.student_name_status == false || this.major_status == false || this.final_semester_status == false || this.student_mobile_status == false || this.itp_start_status == false || this.itp_end_status == false || this.company_name_status == false || this.company_address_status == false || this.company_postcode_status == false || this.company_state_status == false || this.company_telephone_status == false || this.allowance_status == false || this.supervisor_title_status == false || this.supervisor_first_name_status == false || this.supervisor_last_name_status == false || this.supervisor_designation_status == false || this.supervisor_department_status == false || this.supervisor_contact_status == false || this.supervisor_email_status == false){
            event.preventDefault();
            document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        }
        else{
            document.getElementById("master_error").innerHTML = "";
            window.location.href="/itpproject/itp_advisor_assign"
        }
    }

    redirect(): void {
        window.location.href="/itpproject/download_reference"
    }
}
