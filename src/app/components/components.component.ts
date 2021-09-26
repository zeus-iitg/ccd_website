import {Component, OnInit, Renderer2, ViewEncapsulation, Input} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">{{modal_heading}}</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body" [innerHTML]="modal_body"></div>
    `
})
export class NgbModalContent {

    @Input() modal_heading: string;

    @Input() modal_body: string;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ComponentsComponent implements OnInit {
    dynamicSlides = [
        {
            id: 1,
            src: '../../assets/img/Website Icons/1.Microsoft.png',
            alt: 'Microsoft',
            title: 'Microsoft'
        },
        {
            id: 2,
            src: '../../assets/img/Website Icons/2.Bajaj.jpg',
            alt: 'Bajaj',
            title: 'Bajaj'
        },
        {
            id: 3,
            src: '../../assets/img/Website Icons/3.qualcomm.png',
            alt: 'Qualcomm',
            title: 'Qualcomm'
        },
        {
            id: 4,
            src: '../../assets/img/Website Icons/4. TI.png',
            alt: 'Texas Instruments',
            title: 'Texas Instruments'
        },
        {
            id: 5,
            src: '../../assets/img/Website Icons/5. Google.jpg',
            alt: 'Google',
            title: 'Google'
        },
        {
            id: 6,
            src: '../../assets/img/Website Icons/6. GS.png',
            alt: 'Goldman Sachs',
            title: 'Goldman Sachs'
        },
        {
            id: 7,
            src: '../../assets/img/Website Icons/7. LTI.png',
            alt: 'Larsen & Toubro',
            title: 'Larsen & Toubro'
        },
        {
            id: 8,
            src: '../../assets/img/Website Icons/8. Jaguar Land Rover.png',
            alt: 'Jaguar Land Rover',
            title: 'Jaguar Land Rover'
        },
        {
            id: 9,
            src: '../../assets/img/Website Icons/9. Samsung.png',
            alt: 'Samsung',
            title: 'Samsung'
        },
        {
            id: 10,
            src: '../../assets/img/Website Icons/10. Mastercard.jpg',
            alt: 'Mastercard',
            title: 'Mastercard'
        },
        {
            id: 11,
            src: '../../assets/img/Website Icons/11. MB.png',
            alt: 'Mercedes-Benz',
            title: 'Mercedes-Benz'
        },
        {
            id: 12,
            src: '../../assets/img/Website Icons/12. UBER.png',
            alt: 'Uber',
            title: 'Uber'
        },
        {
            id: 13,
            src: '../../assets/img/Website Icons/13. Oracle.png',
            alt: 'Oracle',
            title: 'Oracle'
        },
        {
            id: 14,
            src: '../../assets/img/Website Icons/14. GAIL.png',
            alt: 'GAIL',
            title: 'GAIL'
        },
        {
            id: 15,
            src: '../../assets/img/Website Icons/15. Mahindra.png',
            alt: 'Mahindra',
            title: 'Mahindra'
        },
        {
            id: 16,
            src: '../../assets/img/Website Icons/16. Intel.png',
            alt: 'Intel',
            title: 'Intel'
        },
        {
            id: 17,
            src: '../../assets/img/Website Icons/17. Sprinklr.png',
            alt: 'Sprinklr',
            title: 'Sprinklr'
        },
        {
            id: 18,
            src: '../../assets/img/Website Icons/18. Jio.jpg',
            alt: 'Jio',
            title: 'Jio'
        }
    ]

    customOptions: OwlOptions = {
        // items: 7,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1200,
        autoplayHoverPause: true,
        margin: 50,
        mouseDrag: true,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 600,
        navText: ['&#8249', '&#8250;'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 3
            },
            760: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    }

    testimonialsOptions: OwlOptions = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2400,
        autoplayHoverPause: true,
        margin: 50,
        mouseDrag: true,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 600,
        navText: ['&#8249', '&#8250;'],
    }

    testimonialSlides = [
        {
            heading: 'From the Director\'s desk',
            name: 'Prof. T. G. Sitharam',
            position: 'Director',
            image: '../../assets/img/tgs.jpg',
            message: 'Indian Institute of Technology Guwahati was established in 1994 by an Act of Parliament. The academic programme started with 65 students in three undergraduate programmes in 1995. The Institute is growing steadily and the total number of students in eleven departments and three academic centres in numerous undergraduate and postgraduate programmes is now around 5100.\n' +
                '\n' +
                'The Institute has excellent infrastructure for all round development of its students. The laboratories are well equipped with modern cutting edge instruments for research and development.\n' +
                'The Institute has a very good central library with collection of more than 1.6 lakh printed books and subscribes to more than 500 printed journals. Library has access to over ten thousand online journals. The sports facilities of the Institute are of international standard. The students graduating from this institute are motivated, bright, and very eager to perform after they graduate. Institute provides them quality education both in the classroom, and outside. IIT Guwahati has extensive facilities for cultural and creative activities too. IIT Guwahati helps in shaping up the bright minds with proper perspectives.\n' +
                '\n' +
                'Because of the excellent performance of the students of IIT Guwahati in all the fields of study and research, guided by the dynamic faculty members and with full support of the non-teaching employees, IIT Guwahati could feature in the coveted list of Top-100 young universities (under 50 years of age) of the world selected by the Times Higher Education (THE) magazine. IIT Guwahati is the only Indian entry to this elite list. With this India has joined the league of Top 100 for the first time. Faculty members and the PhD students have been able to demonstrate substantial intrinsic merit of their research. Also some research- activities have excellent connection to Industrial problems.\n' +
                '\n' +
                'I invite all prospective employers of our students to visit IIT Guwahati and to participate in the on-campus placement process.\n' +
                '\n' +
                'I cordially invite all prospective employers to visit IIT Guwahati and to participate in the on-campus placement process.\n' +
                '\n' +
                'With Best Wishes,'
        },
        {
            heading: 'From the Head of the Centre\'s desk',
            name: 'Dr. Abhishek Kumar, PhD',
            position: 'Head of the Centre for Career Development',
            image: '../../assets/img/Abhishek_Kumar.jpg',
            message: 'IIT Guwahati has recently entered the elite list of top 70 young universities of the world under 50 years. It is the best ranking for any Indian institute in the world university rankings. At this moment of pride and happiness, I take this opportunity to welcome you all.\n' +
                '\n' +
                'In a short duration of over two decades, IIT Guwahati has been able to develop world-class facilities and resources. We are well recognised for our research and teaching facilities in India and abroad.\n' +
                '\n' +
                'Our students have continuously been able to display excellent potential and skill in their fields of academics and extra-curricular activities. Many of the students have visited foreign universities of repute to widen their knowledge and experience. The IIT Guwahati alumni are showing excellence in their respective fields. It is worth mentioning that recruiters from varied fields have responded very enthusiastically and rated our students very high. Their abilities are well attested by the excellent reports we receive from the recruiting companies.\n' +
                '\n' +
                'We provide continuous support to the graduating students registered for placement by offering information and guidance. Centre for Career Development (CCD) looks after all the necessary activities for their placement. We have the required infrastructure to conduct parallel placement sessions, pre-placement talks, excellent accommodation arrangement in the guest house, etc. to organize campus placement activities.\n' +
                '\n' +
                'Our CCD team take this opportunity to invite your esteemed organization to visit our our campus for recruitment of our students. It will be a great privilege for us to welcome you at the IIT Guwahati.\n' +
                '\n' +
                'With best wishes,'
        }
    ]

    // studentcount = 47;
    // facultycount = 6;
    // staffcount = 10;
    //
    // studentcountstop: any = setInterval(() => {
    //     this.studentcount += 35;
    //     if (this.studentcount === 7047) {
    //         clearInterval(this.studentcountstop);
    //     }
    // }, 10)
    //
    // facultycountstop: any = setInterval(() => {
    //     this.facultycount += 2;
    //     if (this.facultycount === 406) {
    //         clearInterval(this.facultycountstop);
    //     }
    // }, 10)
    //
    // staffcountstop: any = setInterval(() => {
    //     this.staffcount += 5;
    //     if (this.staffcount === 510) {
    //         clearInterval(this.staffcountstop);
    //     }
    // }, 20)

    constructor( private renderer: Renderer2, private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbModalContent);
        modalRef.componentInstance.modal_heading = 'Placement Reports';
        modalRef.componentInstance.modal_body = `
        <p><a href="../../assets/documents/Placement_statistics_2020_21.pdf" target="_blank"> Placement Statistics 2020-21 </a></p>
        <p><a href="../../assets/documents/Placement_statistics_2019_20.pdf" target="_blank"> Placement Statistics 2019-20 </a></p>
        <p><a href="../../assets/documents/Placement_statistics_2018_19.pdf" target="_blank"> Placement Statistics 2018-19 </a></p>
        <p><a href="../../assets/documents/Placement_statistics_2017_18.pdf" target="_blank"> Placement Statistics 2017-18 </a></p>
        `
    }

    open2() {
        const modalRef = this.modalService.open(NgbModalContent);
        modalRef.componentInstance.modal_heading = 'Internship NOC Application form';
        modalRef.componentInstance.modal_body = `
        <div class="internship-noc">
            <div class="format">
                <a href="../../assets/documents/Application-form-for-NOC-for-Internship.pdf" target="_blank">
                    <img src="../../assets/img/Icons/PDF_file_icon.png" height="100" alt="PDF">
                    <p>Download PDF</p>
                </a>
            </div>
            <div class="format">
                <a href="../../assets/documents/Application-form-for-NOC-for-Internship.doc" target="_blank">
                    <img src="../../assets/img/Icons/docx_icon.png" height="100" alt="DOC">
                    <p>Download DOC</p>
                </a>
            </div>
        </div>
        `
    }

    ngOnInit() {
    }

}
