// import * as p5 from 'p5';
import  p5 from 'p5';
import * as p5dom from 'p5/lib/addons/p5.dom';
import * as p5sound from 'p5/lib/addons/p5.sound';
import React , {Component} from 'react';
declare const ml5: any;


export default class Capture extends Component  {

    p5: any;
    title = 'e-posture-ang';

    constructor(props:any) {
        super(props);

    }

    componentDidMount() {
      this.createCanvas();
    }

    // ngOnDestroy() {
    //   this.p5.noCanvas();
    //   console.log('Posture Destory');
    // }

    createCanvas() {
      console.log('Posture Initialization');
      this.p5 = new p5(this.drawing);
    }

    drawing(p: any) {
      // Calling capture library
      let capture: any;

      // Body model
      const model = {
        // Making NOSE variable
        noseX: 0,
        noseY: 0,

        // Making leftEye variable
        leftEyeX: 0,
        leftEyeY: 0,

        // Making rightEye variable
        rightEyeX: 0,
        rightEyeY: 0,

        // Making leftEar
        leftEarX: 0,
        leftEarY: 0,

        // Making rightEar
        rightEarX: 0,
        rightEarY: 0,

        // Making left shoulder
        leftShoulderX: 0,
        leftShoulderY: 0,

        // Making right shoulder
        rightShoulderX: 0,
        rightShoulderY: 0,

        // Making left elbow
        leftElbowX: 0,
        leftElbowY: 0,

        // Making right elbow
        rightElbowX: 0,
        rightElbowY: 0,

        // Making left wrist
        leftWristX: 0,
        leftWristY: 0,

        // Making right wrist
        rightWristX: 0,
        rightWristY: 0,

        // Making left hip
        leftHipX: 0,
        leftHipY: 0,

        // Making right hip
        rightHipX: 0,
        rightHipY: 0,

        // Making left knee
        leftKneeX: 0,
        leftKneeY: 0,

        // Making right knee
        rightKneeX: 0,
        rightKneeY: 0,

        // Making left ankle
        leftAnkleX: 0,
        leftAnkleY: 0,

        // Making right ankle
        rightAnkleX: 0,
        rightAnkleY: 0,

        // Making neck
        neckX: 0,
        neckY: 0,

        // Making back
        backX: 0,
        backY: 0,
      };

      p.setup = () => {
        p.createCanvas(640, 480).parent(document.getElementById('posture-canvas'));
        capture = p.createCapture(p.VIDEO);
        capture.hide();
        const poseNet = ml5.poseNet(capture, () => {
          console.log('model ready');
        });
        poseNet.on('pose', p.gotPoses);
      };

      p.gotPoses = (poses: any) => {
        if (poses.length) {
          // nose position
          const newNoseX = poses[0].pose.keypoints[0].position.x;
          const newNoseY = poses[0].pose.keypoints[0].position.y;

          // left eye position
          const newLeftEyeX = poses[0].pose.keypoints[1].position.x;
          const newLeftEyeY = poses[0].pose.keypoints[1].position.y;

          // right eye position
          const newRightEyeX = poses[0].pose.keypoints[2].position.x;
          const newRightEyeY = poses[0].pose.keypoints[2].position.y;

          // left ear position
          const newLeftEarX = poses[0].pose.keypoints[3].position.x;
          const newLeftEarY = poses[0].pose.keypoints[3].position.y;

          // right ear position
          const newRightEarX = poses[0].pose.keypoints[4].position.x;
          const newRightEarY = poses[0].pose.keypoints[4].position.y;

          // left shoulder position
          const newleftShoulderX = poses[0].pose.keypoints[5].position.x;
          const newleftShoulderY = poses[0].pose.keypoints[5].position.y;

          // right shoulder position
          const newRightShoulderX = poses[0].pose.keypoints[6].position.x;
          const newRightShoulderY = poses[0].pose.keypoints[6].position.y;

          // left elbow position
          const newLeftElbowX = poses[0].pose.keypoints[7].position.x;
          const newLeftElbowY = poses[0].pose.keypoints[7].position.y;

          // right elbow
          const newRightElbowX = poses[0].pose.keypoints[8].position.x;
          const newRightElbowY = poses[0].pose.keypoints[8].position.y;

          // for left wrist
          const newLeftWristX = poses[0].pose.keypoints[9].position.x;
          const newLeftWristY = poses[0].pose.keypoints[9].position.y;

          // for right wrist
          const newRightWristX = poses[0].pose.keypoints[10].position.x;
          const newRightWristY = poses[0].pose.keypoints[10].position.y;

          // for left hip
          const newLeftHipX = poses[0].pose.keypoints[11].position.x;
          const newLeftHipY = poses[0].pose.keypoints[11].position.y;

          // for right hip
          const newRightHipX = poses[0].pose.keypoints[12].position.x;
          const newRightHipY = poses[0].pose.keypoints[12].position.y;

          // for left knee
          const newLeftKneeX = poses[0].pose.keypoints[13].position.x;
          const newLeftKneeY = poses[0].pose.keypoints[13].position.y;

          // for right knee
          const newRightKneeX = poses[0].pose.keypoints[14].position.x;
          const newRightKneeY = poses[0].pose.keypoints[14].position.y;

          // for left Ankle
          const newLeftAnkleX = poses[0].pose.keypoints[15].position.x;
          const newLeftAnkleY = poses[0].pose.keypoints[15].position.y;

          // for right Ankle
          const newRightAnkleX = poses[0].pose.keypoints[16].position.x;
          const newRightAnkleY = poses[0].pose.keypoints[16].position.y;

          // making delay nose
          model.noseX = p.lerp(model.noseX, newNoseX, 0.5);
          model.noseY = p.lerp(model.noseY, newNoseY, 0.5);

          // making delay right Eye
          model.rightEyeX = p.lerp(model.rightEyeX, newRightEyeX, 0.5);
          model.rightEyeY = p.lerp(model.rightEyeY, newRightEyeY, 0.5);

          // making  delay left eye
          model.leftEyeX = p.lerp(model.leftEyeX, newLeftEyeX, 0.5);
          model.leftEyeY = p.lerp(model.leftEyeY, newLeftEyeY, 0.5);

          // making delay left ear
          model.leftEarX = p.lerp(model.leftEarX, newLeftEarX, 0.5);
          model.leftEarY = p.lerp(model.leftEarY, newLeftEarY, 0.5);

          // making delay right ear
          model.rightEarX = p.lerp(model.rightEarX, newRightEarX, 0.5);
          model.rightEarY = p.lerp(model.rightEarY, newRightEarY, 0.5);

          // making delay in left shoulder
          model.leftShoulderX = p.lerp(
            model.leftShoulderX,
            newleftShoulderX,
            0.5
          );
          model.leftShoulderY = p.lerp(
            model.leftShoulderY,
            newleftShoulderY,
            0.5
          );

          // making right shoulder
          model.rightShoulderX = p.lerp(
            model.rightShoulderX,
            newRightShoulderX,
            0.5
          );
          model.rightShoulderY = p.lerp(
            model.rightShoulderY,
            newRightShoulderY,
            0.5
          );

          model.leftElbowX = p.lerp(model.leftElbowX, newLeftElbowX, 0.5);
          model.leftElbowY = p.lerp(model.leftElbowY, newLeftElbowY, 0.5);

          model.rightElbowX = p.lerp(model.rightElbowX, newRightElbowX, 0.5);
          model.rightElbowY = p.lerp(model.rightElbowY, newRightElbowY, 0.5);

          model.leftWristX = p.lerp(model.leftWristX, newLeftWristX, 0.5);
          model.leftWristY = p.lerp(model.leftWristY, newLeftWristY, 0.5);

          model.rightWristX = p.lerp(model.rightWristX, newRightWristX, 0.5);
          model.rightWristY = p.lerp(model.rightWristY, newRightWristY, 0.5);

          model.leftHipX = p.lerp(model.leftHipX, newLeftHipX, 0.5);
          model.leftHipY = p.lerp(model.leftHipY, newLeftHipY, 0.5);

          model.rightHipX = p.lerp(model.rightHipX, newRightHipX, 0.5);
          model.rightHipY = p.lerp(model.rightHipY, newRightHipY, 0.5);

          model.leftKneeX = p.lerp(model.leftKneeX, newLeftKneeX, 0.5);
          model.leftKneeY = p.lerp(model.leftKneeY, newLeftKneeY, 0.5);

          model.rightKneeX = p.lerp(model.rightKneeX, newRightKneeX, 0.5);
          model.rightKneeY = p.lerp(model.rightKneeY, newRightKneeY, 0.5);

          model.leftAnkleX = p.lerp(model.leftAnkleX, newLeftAnkleX, 0.5);
          model.leftAnkleY = p.lerp(model.leftAnkleY, newLeftAnkleY, 0.5);

          model.rightAnkleX = p.lerp(model.rightAnkleX, newRightAnkleX, 0.5);
          model.rightAnkleY = p.lerp(model.rightAnkleY, newRightAnkleY, 0.5);

          model.neckX = (model.rightShoulderX + model.leftShoulderX) / 2;
          model.neckY = (model.rightShoulderY + model.leftShoulderY) / 2;

          model.backX = (model.rightHipX + model.leftHipX) / 2;
          model.backY = (model.rightHipY + model.leftHipY) / 2;
        }
      };

      p.draw = () => {
        p.image(capture, 0, 0);

        // fill color
        p.fill('green');
        // nose
        p.ellipse(model.noseX, model.noseY, 5);
        // right eye
        p.ellipse(model.rightEyeX, model.rightEyeY, 5);
        // left eye
        p.ellipse(model.leftEyeX, model.leftEyeY, 5);
        // right ear
        p.ellipse(model.rightEarX, model.rightEarY, 5);
        // left ear
        p.ellipse(model.leftEarX, model.leftEarY, 5);
        // left elbow
        p.ellipse(model.leftElbowX, model.leftElbowY, 10);
        // right elbow
        p.ellipse(model.rightElbowX, model.rightElbowY, 10);
        // left hip
        p.ellipse(model.leftHipX, model.leftHipY, 10);
        // right hip
        p.ellipse(model.rightHipX, model.rightHipY, 10);
        // left shoulder
        p.ellipse(model.leftShoulderX, model.leftShoulderY, 20);
        // right shoulder
        p.ellipse(model.rightShoulderX, model.rightShoulderY, 20);
        // left wrist
        p.ellipse(model.leftWristX, model.leftWristY, 50);
        // right writst
        p.ellipse(model.rightWristX, model.rightWristY, 50);
        // left knee
        p.ellipse(model.leftKneeX, model.leftKneeY, 10);
        // right knee
        p.ellipse(model.rightKneeX, model.rightKneeY, 10);
        // left ankle
        p.ellipse(model.leftAnkleX, model.leftAnkleY, 10);
        // right ankle
        p.ellipse(model.rightAnkleX, model.rightAnkleY, 10);

        // making lines in green
        p.stroke(0, 255, 0);
        // stroke weight
        p.strokeWeight(8);
        // right shoulder to left shoulder
        p.line(
          model.rightShoulderX,
          model.rightShoulderY,
          model.leftShoulderX,
          model.leftShoulderY
        );
        // right elbow to right shoulder
        p.line(
          model.rightElbowX,
          model.rightElbowY,
          model.rightShoulderX,
          model.rightShoulderY
        );
        // right elbow to right wrist
        p.line(
          model.rightElbowX,
          model.rightElbowY,
          model.rightWristX,
          model.rightWristY
        );
        // left shoulder to right elbow
        p.line(
          model.leftShoulderX,
          model.leftShoulderY,
          model.leftElbowX,
          model.leftElbowY
        );
        // left wrist to left elbow
        p.line(
          model.leftElbowX,
          model.leftElbowY,
          model.leftWristX,
          model.leftWristY
        );
        // left shoulder to left hip
        p.line(
          model.leftShoulderX,
          model.leftShoulderY,
          model.leftHipX,
          model.leftHipY
        );
        // right shoulder to right hip
        p.line(
          model.rightShoulderX,
          model.rightShoulderY,
          model.rightHipX,
          model.rightHipY
        );
        // right hip to left hip
        p.line(model.rightHipX, model.rightHipY, model.leftHipX, model.leftHipY);
        // left hip to left knee
        p.line(model.leftHipX, model.leftHipY, model.leftKneeX, model.leftKneeY);
        // right hip to right knee
        p.line(
          model.rightHipX,
          model.rightHipY,
          model.rightKneeX,
          model.rightKneeY
        );
        // left knee to left ankle
        p.line(
          model.leftKneeX,
          model.leftKneeY,
          model.leftAnkleX,
          model.leftAnkleY
        );
        // right knee to right ankle
        p.line(
          model.rightKneeX,
          model.rightKneeY,
          model.rightAnkleX,
          model.rightAnkleY
        );
        // nose to neck
        p.line(model.noseX, model.noseY, model.neckX, model.neckY);
        // neck to back
        p.line(model.neckX, model.neckY, model.backX, model.backY);
        // making right eye as funny
        // eye(model.rightEyeX, model.rightEyeY, 40, 1);
        // making left eye as funny
        // eye(model.leftEyeX, model.leftEyeY, 40, -1);
      };
    }


    render() {
        return (<div id="posture-canvas"></div>);
     }
  }