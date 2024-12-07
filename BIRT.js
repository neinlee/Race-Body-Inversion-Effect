﻿/************* 
 * Birt *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

var recognition_phase; // Declare recognition_phase as a global variable

let introClock = new util.Clock(); // 루틴 시간 측정을 위한 변수
let trialClock = new util.Clock(); // Declaration and initialization at the top of the script

let intro_text; 
let press_enter_intro;
// store info about the experiment session:
let expName = 'BIRT';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
// Global initialization for currentLoop to prevent undefined errors
if (typeof currentLoop === 'undefined') {
    var currentLoop = null;
}
// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
    debug: true,
});

let frameDur = 1.0 / 60.0; // 기본 프레임 지속 시간 (60 FPS)
let fixation; // Declare globally

async function experimentInit() {
    // Initialize the fixation visual stimulus
    fixation = new visual.TextStim({
        win: psychoJS.window,
        name: 'fixation',
        text: '+',  // Typically a plus sign for fixation
        pos: [0, 0],  // Centered on the screen
        height: 0.1,  // Appropriate size for visibility
        color: new util.Color('white'),  // Ensure contrast
        opacity: 1
    });
}
// Start PsychoJS and open the PsychoJS window
psychoJS.start({
    expName: expName,
    expInfo: expInfo,
    resources: [
        { name: 'conditionON.csv', path: 'conditionON.csv' },
        { name: 'condition.csv', path: 'condition.csv' },
        { name: 'default.png', path: 'https://pavlovia.org/assets/default/default.png' }
    ]
});

psychoJS.openWindow({
    fullscr: true,
    color: new util.Color([0, 0, 0]),
    units: 'height',
    waitBlanking: true
});

// Initialize global variables and components
let globalClock = new util.Clock();
let routineTimer = new util.CountdownTimer();
let introClock = new util.Clock();
let trialClock = new util.Clock();
let feedbackClock = new util.Clock();
let EndClock = new util.Clock();
let instructionClock = new util.Clock();
let recognitionClock = new util.Clock();

let intro_text, fixation, body, instruction_for_recognition, feedback_text, Outro;
let press_enter_intro, key_resp, press_enter, image, text;

// Initialize components for Routine "intro"
intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: '실험에 참가해주셔서 감사합니다.\n\n지금부터, 화면의 중앙에 하나씩 제시되는 얼굴들을 바라봐주세요.\n2분동안 20명의 사진이 제시됩니다.\n\n계속하려면 엔터Enter 키를 눌러주세요.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,
    color: new util.Color('white')
});

// More component initialization here...

// Define and add routines to flowScheduler
const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);

// Define functions
function updateInfo() {
    // Function body here...
}

function experimentInit() {
    // Additional initialization if needed...
}

// Add routines to scheduler
flowScheduler.add(updateInfo);
flowScheduler.add(experimentInit);
flowScheduler.add(() => introRoutineBegin());
// Add other routines similarly...

// Schedule conditions based on dialog responses
psychoJS.scheduleCondition(
    () => psychoJS.gui.dialogComponent.button === 'OK',
    flowScheduler,
    dialogCancelScheduler
);

// Start the scheduler
psychoJS.startScheduler(flowScheduler);

// Quit if user presses Cancel in dialog box
dialogCancelScheduler.add(quitPsychoJS, '감사합니다', false);

// Quit and clean up after experiment ends
psychoJS.quit({message: '감사합니다', isCompleted: true});

function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    introClock.reset();
    intro_text.setAutoDraw(true);
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    press_enter_intro.clock.reset();
    press_enter_intro.start();
    press_enter_intro.keys = undefined;
    press_enter_intro.rt = undefined;
    _press_enter_intro_allKeys = [];
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(intro_text);
    introComponents.push(press_enter_intro);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    const keys = press_enter_intro.getKeys({ keyList: ['return'], waitRelease: false });

    // *intro_text* updates
    if (t >= 0.0 && intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text.tStart = t;  // (not accounting for frame time here)
      intro_text.frameNStart = frameN;  // exact frame index
      
      intro_text.setAutoDraw(true);
    }
    
    
    // *press_enter_intro* updates
    if (t >= 0.0 && press_enter_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      press_enter_intro.tStart = t;  // (not accounting for frame time here)
      press_enter_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { press_enter_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { press_enter_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { press_enter_intro.clearEvents(); });
    }
    
    if (press_enter_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = press_enter_intro.getKeys({keyList: ['return'], waitRelease: false});
      _press_enter_intro_allKeys = _press_enter_intro_allKeys.concat(theseKeys);
      if (_press_enter_intro_allKeys.length > 0) {
        press_enter_intro.keys = _press_enter_intro_allKeys[_press_enter_intro_allKeys.length - 1].name;  // just the last key pressed
        press_enter_intro.rt = _press_enter_intro_allKeys[_press_enter_intro_allKeys.length - 1].rt;
        press_enter_intro.duration = _press_enter_intro_allKeys[_press_enter_intro_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function introRoutineEnd(snapshot) {
  return async function () {
    intro_text.setAutoDraw(false);
    //--- Ending Routine 'intro' ---
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(press_enter_intro.corr, level);
    }
    psychoJS.experiment.addData('press_enter_intro.keys', press_enter_intro.keys);
    if (typeof press_enter_intro.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('press_enter_intro.rt', press_enter_intro.rt);
        psychoJS.experiment.addData('press_enter_intro.duration', press_enter_intro.duration);
        routineTimer.reset();
        }
    
    press_enter_intro.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}
function trialRoutineBegin() {
    showFixation(); // Show the fixation at the start of the trial
    return Scheduler.Event.NEXT;
}
function trialRoutineEachFrame() {
    // Here, you might check for conditions to hide fixation, e.g., after a certain time
    if (conditionToHideFixation) {
        hideFixation(); // Hide the fixation based on some condition
    }
    return Scheduler.Event.FLIP_REPEAT;
}

function trialRoutineEnd() {
    hideFixation(); // Ensure fixation is hidden at the end of the trial
    return Scheduler.Event.NEXT;
}

function import_conditions(study_phaseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    study_phase = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition.csv',
      seed: undefined, name: 'study_phase'
    });
    // Ensure currentLoop is defined and assigned
    if (typeof currentLoop === 'undefined') {
            currentLoop = study_phase; // Assign currentLoop to study_phase
    }
    psychoJS.experiment.addLoop(study_phase); // add the loop to the experiment
    currentLoop = study_phase;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStudy_phase of study_phase) {
      snapshot = study_phase.getSnapshot();
      study_phaseLoopScheduler.add(importConditions(snapshot));
      study_phaseLoopScheduler.add(trialRoutineBegin(snapshot));
      study_phaseLoopScheduler.add(trialRoutineEachFrame());
      study_phaseLoopScheduler.add(trialRoutineEnd(snapshot));
      study_phaseLoopScheduler.add(study_phaseLoopEndIteration(study_phaseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function study_phaseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(study_phase);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function study_phaseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function recognition_phaseLoopBegin(recognition_phaseLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    recognition_phase = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditionON.csv',
      seed: undefined, name: 'recognition_phase'
    });
    if (typeof currentLoop === 'undefined') {
    currentLoop = recognition_phase; // Assign currentLoop to recognition_phase
    }
    psychoJS.experiment.addLoop(recognition_phase); // add the loop to the experiment
    currentLoop = recognition_phase;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRecognition_phase of recognition_phase) {
      snapshot = recognition_phase.getSnapshot();
      recognition_phaseLoopScheduler.add(importConditions(snapshot));
      recognition_phaseLoopScheduler.add(recognitionRoutineBegin(snapshot));
      recognition_phaseLoopScheduler.add(recognitionRoutineEachFrame());
      recognition_phaseLoopScheduler.add(recognitionRoutineEnd(snapshot));
      recognition_phaseLoopScheduler.add(feedbackRoutineBegin(snapshot));
      recognition_phaseLoopScheduler.add(feedbackRoutineEachFrame());
      recognition_phaseLoopScheduler.add(feedbackRoutineEnd(snapshot));
      recognition_phaseLoopScheduler.add(recognition_phaseLoopEndIteration(recognition_phaseLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function recognition_phaseLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(recognition_phase);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function recognition_phaseLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    body.setOri(condition.includes('I') ? 180 : 0);
    body.setImage(WMfileName);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(body);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    
    // *body* updates
    if (t >= 1 && body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      body.tStart = t;  // (not accounting for frame time here)
      body.frameNStart = frameN;  // exact frame index
      
      body.setAutoDraw(true);
    }
    
    frameRemains = 1 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (body.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      body.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    if (trialMaxDurationReached) {
        trialClock.add(trialMaxDuration);
    } else {
        trialClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    press_enter.keys = undefined;
    press_enter.rt = undefined;
    _press_enter_allKeys = [];
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instruction_for_recognition);
    instructionComponents.push(press_enter);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_for_recognition* updates
    if (t >= 0.0 && instruction_for_recognition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_for_recognition.tStart = t;  // (not accounting for frame time here)
      instruction_for_recognition.frameNStart = frameN;  // exact frame index
      
      instruction_for_recognition.setAutoDraw(true);
    }
    
    
    // *press_enter* updates
    if (t >= 0.0 && press_enter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      press_enter.tStart = t;  // (not accounting for frame time here)
      press_enter.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { press_enter.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { press_enter.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { press_enter.clearEvents(); });
    }
    
    if (press_enter.status === PsychoJS.Status.STARTED) {
      let theseKeys = press_enter.getKeys({keyList: ['return'], waitRelease: false});
      _press_enter_allKeys = _press_enter_allKeys.concat(theseKeys);
      if (_press_enter_allKeys.length > 0) {
        press_enter.keys = _press_enter_allKeys[_press_enter_allKeys.length - 1].name;  // just the last key pressed
        press_enter.rt = _press_enter_allKeys[_press_enter_allKeys.length - 1].rt;
        press_enter.duration = _press_enter_allKeys[_press_enter_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(press_enter.corr, level);
    }
    psychoJS.experiment.addData('press_enter.keys', press_enter.keys);
    if (typeof press_enter.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('press_enter.rt', press_enter.rt);
        psychoJS.experiment.addData('press_enter.duration', press_enter.duration);
        routineTimer.reset();
        }
    
    press_enter.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function recognitionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recognition' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    recognitionClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    recognitionMaxDurationReached = false;
    // update component parameters for each repeat
    image.setOri(condition.includes('I') ? 180 : 0);
    image.setImage(WMfileName);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('recognition.started', globalClock.getTime());
    recognitionMaxDuration = null
    // keep track of which components have finished
    recognitionComponents = [];
    recognitionComponents.push(text);
    recognitionComponents.push(image);
    recognitionComponents.push(key_resp);
    
    for (const thisComponent of recognitionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function recognitionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recognition' ---
    // get current time
    t = recognitionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    
    // *image* updates
    if (t >= 1 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 1 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 1.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    frameRemains = 1.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp.keys == correctResponse) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of recognitionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function recognitionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recognition' ---
    for (const thisComponent of recognitionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('recognition.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correctResponse)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    if (recognitionMaxDurationReached) {
        recognitionClock.add(recognitionMaxDuration);
    } else {
        recognitionClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    feedback_text.setText(((key_resp.keys && (! key_resp.corr)) ? "\uc624\ub2f5" : ((! key_resp.keys) ? "\ub108\ubb34 \ub290\ub9bd\ub2c8\ub2e4" : "")));
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EndClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0; 
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'oj6aYWEdjBzx', // ⭑ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ⭑
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(Outro);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Outro* updates
    if (t >= 0.0 && Outro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Outro.tStart = t;  // (not accounting for frame time here)
      Outro.frameNStart = frameN;  // exact frame index
      
      Outro.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Outro.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Outro.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    if (EndMaxDurationReached) {
        EndClock.add(EndMaxDuration);
    } else {
        EndClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    console.log('Current Loop:', currentLoop);
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
