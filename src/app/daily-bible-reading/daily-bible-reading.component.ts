import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-bible-reading',
  templateUrl: './daily-bible-reading.component.html',
  styleUrls: ['./daily-bible-reading.component.css']
})
export class DailyBibleReadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pageContent = {
    header:{
      title: 'BIBLE READING',
      subtitle: 'Study to shew thyself approved unto God, a workman that needeth not to be ashamed',
      logOutbtn: '',
      img_src: "../assets/img/Daily_bible_reading_B.png",
      audiobtn: '',
      videobtn: ''
    },
    subfooter:{
      title: 'ONLINE SERVICE TIMES',
      subtitle: 'Join us online during the service times listed below.',
      worshipService_main: 'SUNDAY',
      worshipService_span: ':  8:30AM - 10:00AM',
      weeklyService_main: 'WEDNESDAY',
      weeklyService_span: ':  5:30PM - 7:00PM',
      heraldsLiveLink: 'heralds/media/live',
      mixlrLink: '../../assets/img/Mixlr_logo_link.svg',
      facebookLiveLink: '../../assets/img/facebook_link.svg',
      youtubeLink: '../../assets/img/youtube_icon.svg',
      pastorImg_link: '../../assets/img/Online_Service_times_B.png'
    }
  };

}