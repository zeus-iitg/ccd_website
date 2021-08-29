import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {OwlOptions} from 'ngx-owl-carousel-o';

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
            alt: 'Side 1',
            title: 'Side 1'
        },
        {
            id: 2,
            src: '../../assets/img/Website Icons/2.Bajaj.jpg',
            alt: 'Side 2',
            title: 'Side 2'
        },
        {
            id: 3,
            src: '../../assets/img/Website Icons/3.qualcomm.png',
            alt: 'Side 3',
            title: 'Side 3'
        },
        {
            id: 4,
            src: '../../assets/img/Website Icons/4. TI.png',
            alt: 'Side 4',
            title: 'Side 4'
        },
        {
            id: 5,
            src: '../../assets/img/Website Icons/5. Google.jpg',
            alt: 'Side 5',
            title: 'Side 5'
        },
        {
            id: 6,
            src: '../../assets/img/Website Icons/6. GS.png',
            alt: 'Side 6',
            title: 'Side 6'
        },
        {
            id: 7,
            src: '../../assets/img/Website Icons/7. LTI.png',
            alt: 'Side 7',
            title: 'Side 7'
        },
        {
            id: 8,
            src: '../../assets/img/Website Icons/8. Jaguar Land Rover.png',
            alt: 'Side 8',
            title: 'Side 8'
        },
        {
            id: 9,
            src: '../../assets/img/Website Icons/9. Samsung.png',
            alt: 'Side 9',
            title: 'Side 9'
        },
        {
            id: 10,
            src: '../../assets/img/Website Icons/10. Mastercard.jpg',
            alt: 'Side 10',
            title: 'Side 10'
        },
        {
            id: 11,
            src: '../../assets/img/Website Icons/11. MB.png',
            alt: 'Side 11',
            title: 'Side 11'
        },
        {
            id: 12,
            src: '../../assets/img/Website Icons/12. UBER.png',
            alt: 'Side 12',
            title: 'Side 12'
        },
        {
            id: 13,
            src: '../../assets/img/Website Icons/13. Oracle.png',
            alt: 'Side 13',
            title: 'Side 13'
        },
        {
            id: 14,
            src: '../../assets/img/Website Icons/14. GAIL.png',
            alt: 'Side 14',
            title: 'Side 14'
        },
        {
            id: 15,
            src: '../../assets/img/Website Icons/15. Mahindra.png',
            alt: 'Side 15',
            title: 'Side 15'
        },
        {
            id: 16,
            src: '../../assets/img/Website Icons/16. Intel.png',
            alt: 'Side 16',
            title: 'Side 16'
        },
        {
            id: 17,
            src: '../../assets/img/Website Icons/17. Sprinklr.png',
            alt: 'Side 17',
            title: 'Side 17'
        },
        {
            id: 18,
            src: '../../assets/img/Website Icons/18. Jio.jpg',
            alt: 'Side 18',
            title: 'Side 18'
        }
    ]

    customOptions: OwlOptions = {
        items: 7,
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
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     400: {
        //         items: 2
        //     },
        //     760: {
        //         items: 3
        //     },
        //     1000: {
        //         items: 4
        //     }
        // }
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

    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    studentcount = 47;
    facultycount = 6;
    staffcount = 10;

    studentcountstop: any = setInterval(() => {
        this.studentcount += 35;
        if (this.studentcount == 7047) {
            clearInterval(this.studentcountstop);
        }
    }, 10)

    facultycountstop: any = setInterval(() => {
        this.facultycount += 2;
        if (this.facultycount == 406) {
            clearInterval(this.facultycountstop);
        }
    }, 10)

    staffcountstop: any = setInterval(() => {
        this.staffcount += 5;
        if (this.staffcount == 510) {
            clearInterval(this.staffcountstop);
        }
    }, 20)

    constructor( private renderer: Renderer2) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        const input_group_focus = document.getElementsByClassName('form-control');
        const input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

}
