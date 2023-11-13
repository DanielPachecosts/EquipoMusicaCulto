import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MisionComponent } from 'src/app/components/mision/mision.component';
import { GsapAnimationService } from 'src/app/services/gsap-animation.service';
// import { TokenService } from 'src/app/services/token.service';
// import { UsersService } from 'src/app/services/users.service';
// import { UserSaved } from 'src/app/utils/users.dto';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, AfterViewInit {
  // users: UserSaved[] = [];

  // Reference to mission component for animation
  @ViewChild(MisionComponent, { static: true })
  misionComponent!: MisionComponent;

  // Element reference to start the animation
  @ViewChild('triggerReference', { static: true })
  triggerReference!: ElementRef<HTMLDivElement>;

  constructor(private gsapService: GsapAnimationService) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // // Get list of element refs
    // const paragraphElementsFromMissionText =
    //   this.misionComponent.missionSentenceRef.map(
    //     (sentence) => sentence.nativeElement
    //   );

    // // Text mission animation config
    // this.gsapService.revealTextAnimation(
    //   paragraphElementsFromMissionText,
    //   this.triggerReference.nativeElement
    // );
  }
}
