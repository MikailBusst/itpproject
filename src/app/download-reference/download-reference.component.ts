import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-download-reference',
  templateUrl: './download-reference.component.html',
  styleUrls: ['./download-reference.component.css']
})
export class DownloadReferenceComponent implements OnInit {
  current_date = this.retrieveDate()
  trimester = 1
  year = "2020/2021"
  start_date = "15"
  start_month = "Jun"
  start_year = "2020"
  end_date = "15"
  end_month = "Sep"
  end_year = "2020"
  student_name = localStorage.getItem("reference_student_name")
  student_id = localStorage.getItem("reference_student_id")

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth

    document.getElementById("reference_name").innerHTML = this.student_id + "_reference.pdf"
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section")
        $("#proceed_section").addClass("proceed_section_mobile")
    }
    
    if(width < 420){
        $("section").removeClass("download_section")
        $("section").addClass("download_section_mobile")
        
        $("#dc").removeClass("document_card")
        $("#dc").addClass("document_card_mobile")
        
        $("#ct").addClass("document_card_mobile_text")
    }


  }

  onResize(event) {
    this.check_proceed_resize()
  }

  redirect_back(): void {
    window.location.href = "/itpproject/submit_documents"
  }

  redirect_forward(): void {
    window.location.href = "/itpproject/company_registration"
  }

  check_proceed_resize(): void {
    var width = window.innerWidth;
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section")
        $("#proceed_section").addClass("proceed_section_mobile")
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile")
        $("#proceed_section").addClass("proceed_section")
    }
    
    if(width < 420){
        $("section").removeClass("download_section")
        $("section").addClass("download_section_mobile")
        
        $("#dc").removeClass("document_card")
        $("#dc").addClass("document_card_mobile")
        
        $("#ct").addClass("document_card_mobile_text")
    }
    else{
        $("section").removeClass("download_section_mobile")
        $("section").addClass("download_section")
        
        $("#dc").removeClass("document_card_mobile")
        $("#dc").addClass("document_card")
        
        $("#ct").removeClass("document_card_mobile_text")
    }
  }

  retrieveDate(): String {
    var today = new Date()
    
    var date = String(today.getDate()).padStart(2, '0')
    var month = String(today.getMonth() + 1).padStart(2, '0')
    var year = today.getFullYear()
    
    switch(month) {
        case "01":
            month = "January"
            break
        case "02":
            month = "February"
            break
        case "03":
            month = "March"
            break
        case "04":
            month = "April"
            break
        case "05":
            month = "May"
            break
        case "06":
            month = "June"
            break
        case "07":
            month = "July"
            break
        case "08":
            month = "August"
            break
        case "09":
            month = "September"
            break
        case "10":
            month = "October"
            break
        case "11":
            month = "November"
            break
        case "12":
            month = "December"
            break
        default:
            month = "Undefined"
    }
    
    return date + " " + month + " " + year
  }

  retrieveTrimesterNumber(): String {
    var trimester_number
    
    switch(this.trimester) {
        case 1:
            trimester_number = this.trimester + "st"
            break;
        case 2:
            trimester_number = this.trimester + "nd"
        case 3:
            trimester_number = this.trimester + "rd"
        default:
            trimester_number = "Undefined"
    }
    
    return trimester_number
  }

  generatePDF(): void {
    console.log("generatePDF() running")

    var pdf = new jsPDF({lineHeight: 1.5})
    
    pdf.setFontSize(10)
    pdf.setFontType('bold')
    pdf.text("FACULTY OF INFORMATION SCIENCE AND TECHNOLOGY", 35, 50, { charSpace: '1' })
    
    pdf.setFontType('normal')
    pdf.text(this.current_date, 32, 70, { charSpace: '0'})
    
    pdf.text("Ref. No. FIST/ITP/3_2019_20/156", 130, 70)
    
    pdf.text("To Whom It May Concern", 32, 85)
    
    pdf.text("Dear Sir/Madam,", 32, 100)
    
    pdf.setFontType('bold')
    pdf.text("Industrial Training Program, Session " + this.year + ", Trimester " + this.trimester, 32, 110)
    pdf.text("___________________________________________________", 32, 111)
    
    pdf.setFontType("normal")
    pdf.text("Multimedia University (MMU) is the first government approved private university located in Cyberjaya and Melaka. For your information, we specialise in the fields of Telecommunications, Multimedia and Information Technology. MMU aims to develop students, not only to achieve academic excellence, but also to be familiar with the industrial practices and to improve communication skills. As part of our integrated curriculum, our third year students are required to undergo an Industrial Training program and we would like to kindly invite your organisation to participate in the program.", 32, 120, {maxWidth: 150, align: "justify"})
    
    pdf.text("For the " + this.retrieveTrimesterNumber() + " Trimester " + this.year + " the program is scheduled to commence on " + this.start_date + " " + this.start_month + " " + this.start_year + " until " + this.end_date + " " + this.end_month + " " + this.end_year + " (approximately 12 weeks). The final year students are majoring in Informations Systems Engineering, Software Engineering, Data Communications, Security Technology, Artificial Intelligence, Business Information System, and Information Technology Management. They have completed courses in programming, database systems, operating systems and data communications as well as System Analysis and Design.", 32, 163, {maxWidth: 150, align: "justify"})
    
    pdf.text("This letter is to confirm that this student " + this.student_name.toUpperCase() + " (ID No. " + this.student_id + ") is currently a student at MMU and is applying for a training placement at your organisation. Should you have any queries, please do not hesitate to contact us.", 32, 201, {maxWidth: 150, align: "justify"})
    
    pdf.text("Thank you.", 32, 221)
    
    pdf.text("Yours sincerely,", 32, 236)
    
    var img_data = 'data:image/png;base64,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'
    
    pdf.addImage(img_data, 32, 240, 50, 30)
    
    pdf.text("Dr. Wee Kuok Kwee", 32, 273)
    pdf.text("Coordinator of Industrial Training Programme", 32, 278)
    pdf.text("Faculty of Information Science and Technology", 32, 283)
    
    pdf.save(this.student_id + "_reference.pdf")
  }

}
