/***************************** 
 * Masha_Exp_Ce_And_Aha *
 *****************************/


// store info about the experiment session:
let expName = 'masha_exp_CE_and_aha';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instr_before_trainRoutineBegin());
flowScheduler.add(instr_before_trainRoutineEachFrame());
flowScheduler.add(instr_before_trainRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);






flowScheduler.add(instr_after_trRoutineBegin());
flowScheduler.add(instr_after_trRoutineEachFrame());
flowScheduler.add(instr_after_trRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);






flowScheduler.add(conclusionRoutineBegin());
flowScheduler.add(conclusionRoutineEachFrame());
flowScheduler.add(conclusionRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'tablichka_for_train.xlsx', 'path': 'tablichka_for_train.xlsx'},
    {'name': 'tablichka_dlya_exp.xlsx', 'path': 'tablichka_dlya_exp.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instr_before_trainClock;
var text_2;
var key_resp_2;
var CRA_trainClock;
var text;
var key_resp;
var CRA_ans_trainClock;
var textbox;
var key_resp_3;
var is_aha_trClock;
var text_3;
var key_resp_5;
var scale_aha_trainClock;
var text_aha_train;
var aha_scale_train;
var CE_trainClock;
var text_instruction_train;
var text_for_bias_train;
var Bias_scale_train;
var instr_after_trClock;
var text_5;
var key_resp_8;
var CRA_3Clock;
var text_cra;
var key_resp_cra;
var CRA_ansClock;
var ans;
var key_resp_4;
var is_ahaClock;
var text_4;
var key_resp_6;
var scale_ahaClock;
var aha_scale_eval_text;
var aha_scale_eval;
var CE_2Clock;
var text_inst_bias;
var text_for_bias;
var Bias_scale;
var conclusionClock;
var text_conc;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr_before_train"
  instr_before_trainClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Здравствуйте! Вы принимаете участие в исследовании о мышлении и экономическом поведении людей. Каждая проба будет состоять из четырех частей: \n\n1. Вам будут показаны три слова. Ваша задача - найти слово, которое составляет с каждым из них осмысленное словосочетание. Введите его и нажмите ПРОБЕЛ. Универсальные варианты ("красивый", "хороши") не подходят.\n\n2. Затем вам будет задан вопрос: было ли у вас «ага-переживание» — внезапное озарение сопровождающее решение задачи, которое ощущается как неожиданное, вызывает положительную эмоцию и уверенность в правильности ответа. Нажмите на клавиатуре «Y» если было и «N» если не было. \n\n3. Далее вам надо оценить интенсивность ага-переживания. Если оно было, оцените силу от 1 до 7. Если его не было нажмите любую цифру. \n\n4. После этого вы увидите виньетки с различными ситуациями, связанными с экономическим поведением. Ответьте на данный в них вопрос по 7-балльной шкале. Нажмите ПРОБЕЛ чтобы перейти дальше. \n\nНажмите ПРОБЕЛ, чтобы приступить к тестовой пробе, демонстрирующей ход одной экспериментальной пробы',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CRA_train"
  CRA_trainClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CRA_ans_train"
  CRA_ans_trainClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "is_aha_tr"
  is_aha_trClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Было ли у вас ага-переживание? \n\ny - да, было\nn - нет, не было',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "scale_aha_train"
  scale_aha_trainClock = new util.Clock();
  text_aha_train = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_aha_train',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  aha_scale_train = new visual.Slider({
    win: psychoJS.window, name: 'aha_scale_train',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "CE_train"
  CE_trainClock = new util.Clock();
  text_instruction_train = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instruction_train',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_for_bias_train = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_for_bias_train',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Bias_scale_train = new visual.Slider({
    win: psychoJS.window, name: 'Bias_scale_train',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "instr_after_tr"
  instr_after_trClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Тренировочные пробы завершены. Сейчас начнется основной эксперимент. Нажмите ПРОБЕЛ, чтобы продолжить.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CRA_3"
  CRA_3Clock = new util.Clock();
  text_cra = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_cra',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_cra = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CRA_ans"
  CRA_ansClock = new util.Clock();
  ans = new visual.TextBox({
    win: psychoJS.window,
    name: 'ans',
    text: '',
    placeholder: 'undefined',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "is_aha"
  is_ahaClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Было ли у вас ага-переживание? \n\ny - да, было\nn - нет, не было',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "scale_aha"
  scale_ahaClock = new util.Clock();
  aha_scale_eval_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'aha_scale_eval_text',
    text: 'Оцените его интенсивность от 1 до 7, кликнув мышкой: где 1 – «ощущение было слабо выраженным», 7 – «ощущение было ярко выраженным». Если ага-переживания не было нажмите любую цифру',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  aha_scale_eval = new visual.Slider({
    win: psychoJS.window, name: 'aha_scale_eval',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "CE_2"
  CE_2Clock = new util.Clock();
  text_inst_bias = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_inst_bias',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_for_bias = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_for_bias',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Bias_scale = new visual.Slider({
    win: psychoJS.window, name: 'Bias_scale',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "conclusion"
  conclusionClock = new util.Clock();
  text_conc = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_conc',
    text: 'Спасибо, что приняли участие\n*Поцелуй в лобик*\n\nПожалуйста, не жмакайте ниче лишний раз, запись данных идет',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instr_before_trainMaxDurationReached;
var _key_resp_2_allKeys;
var instr_before_trainMaxDuration;
var instr_before_trainComponents;
function instr_before_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_before_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_before_trainClock.reset();
    routineTimer.reset();
    instr_before_trainMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('instr_before_train.started', globalClock.getTime());
    instr_before_trainMaxDuration = null
    // keep track of which components have finished
    instr_before_trainComponents = [];
    instr_before_trainComponents.push(text_2);
    instr_before_trainComponents.push(key_resp_2);
    
    instr_before_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_before_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_before_train' ---
    // get current time
    t = instr_before_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 1 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
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
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_before_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_before_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_before_train' ---
    instr_before_trainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr_before_train.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instr_before_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tablichka_for_train.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(CRA_trainRoutineBegin(snapshot));
      trialsLoopScheduler.add(CRA_trainRoutineEachFrame());
      trialsLoopScheduler.add(CRA_trainRoutineEnd(snapshot));
      trialsLoopScheduler.add(CRA_ans_trainRoutineBegin(snapshot));
      trialsLoopScheduler.add(CRA_ans_trainRoutineEachFrame());
      trialsLoopScheduler.add(CRA_ans_trainRoutineEnd(snapshot));
      trialsLoopScheduler.add(is_aha_trRoutineBegin(snapshot));
      trialsLoopScheduler.add(is_aha_trRoutineEachFrame());
      trialsLoopScheduler.add(is_aha_trRoutineEnd(snapshot));
      trialsLoopScheduler.add(scale_aha_trainRoutineBegin(snapshot));
      trialsLoopScheduler.add(scale_aha_trainRoutineEachFrame());
      trialsLoopScheduler.add(scale_aha_trainRoutineEnd(snapshot));
      trialsLoopScheduler.add(CE_trainRoutineBegin(snapshot));
      trialsLoopScheduler.add(CE_trainRoutineEachFrame());
      trialsLoopScheduler.add(CE_trainRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tablichka_dlya_exp.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(CRA_3RoutineBegin(snapshot));
      trials_2LoopScheduler.add(CRA_3RoutineEachFrame());
      trials_2LoopScheduler.add(CRA_3RoutineEnd(snapshot));
      trials_2LoopScheduler.add(CRA_ansRoutineBegin(snapshot));
      trials_2LoopScheduler.add(CRA_ansRoutineEachFrame());
      trials_2LoopScheduler.add(CRA_ansRoutineEnd(snapshot));
      trials_2LoopScheduler.add(is_ahaRoutineBegin(snapshot));
      trials_2LoopScheduler.add(is_ahaRoutineEachFrame());
      trials_2LoopScheduler.add(is_ahaRoutineEnd(snapshot));
      trials_2LoopScheduler.add(scale_ahaRoutineBegin(snapshot));
      trials_2LoopScheduler.add(scale_ahaRoutineEachFrame());
      trials_2LoopScheduler.add(scale_ahaRoutineEnd(snapshot));
      trials_2LoopScheduler.add(CE_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(CE_2RoutineEachFrame());
      trials_2LoopScheduler.add(CE_2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
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


var CRA_trainMaxDurationReached;
var _key_resp_allKeys;
var CRA_trainMaxDuration;
var CRA_trainComponents;
function CRA_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CRA_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CRA_trainClock.reset();
    routineTimer.reset();
    CRA_trainMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(CRA);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('CRA_train.started', globalClock.getTime());
    CRA_trainMaxDuration = null
    // keep track of which components have finished
    CRA_trainComponents = [];
    CRA_trainComponents.push(text);
    CRA_trainComponents.push(key_resp);
    
    CRA_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function CRA_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CRA_train' ---
    // get current time
    t = CRA_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.1 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
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
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CRA_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CRA_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CRA_train' ---
    CRA_trainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CRA_train.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "CRA_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CRA_ans_trainMaxDurationReached;
var _key_resp_3_allKeys;
var CRA_ans_trainMaxDuration;
var CRA_ans_trainComponents;
function CRA_ans_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CRA_ans_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CRA_ans_trainClock.reset();
    routineTimer.reset();
    CRA_ans_trainMaxDurationReached = false;
    // update component parameters for each repeat
    textbox.setText('');
    textbox.refresh();
    textbox.setText('');
    textbox.setPlaceholder('');
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('CRA_ans_train.started', globalClock.getTime());
    CRA_ans_trainMaxDuration = null
    // keep track of which components have finished
    CRA_ans_trainComponents = [];
    CRA_ans_trainComponents.push(textbox);
    CRA_ans_trainComponents.push(key_resp_3);
    
    CRA_ans_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CRA_ans_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CRA_ans_train' ---
    // get current time
    t = CRA_ans_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // if textbox is active this frame...
    if (textbox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
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
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CRA_ans_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CRA_ans_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CRA_ans_train' ---
    CRA_ans_trainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CRA_ans_train.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "CRA_ans_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var is_aha_trMaxDurationReached;
var _key_resp_5_allKeys;
var is_aha_trMaxDuration;
var is_aha_trComponents;
function is_aha_trRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'is_aha_tr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    is_aha_trClock.reset();
    routineTimer.reset();
    is_aha_trMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('is_aha_tr.started', globalClock.getTime());
    is_aha_trMaxDuration = null
    // keep track of which components have finished
    is_aha_trComponents = [];
    is_aha_trComponents.push(text_3);
    is_aha_trComponents.push(key_resp_5);
    
    is_aha_trComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function is_aha_trRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'is_aha_tr' ---
    // get current time
    t = is_aha_trClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({
        keyList: typeof ['y','n','н','т'] === 'string' ? [['y','n','н','т']] : ['y','n','н','т'], 
        waitRelease: false
      });
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
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
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    is_aha_trComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function is_aha_trRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'is_aha_tr' ---
    is_aha_trComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('is_aha_tr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "is_aha_tr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var scale_aha_trainMaxDurationReached;
var scale_aha_trainMaxDuration;
var scale_aha_trainComponents;
function scale_aha_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'scale_aha_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    scale_aha_trainClock.reset();
    routineTimer.reset();
    scale_aha_trainMaxDurationReached = false;
    // update component parameters for each repeat
    text_aha_train.setText('Оцените его интенсивность от 1 до 7, кликнув мышкой: где 1 – «ощущение было слабо выраженным», 7 – «ощущение было ярко выраженным». Если ага-переживания не было нажмите любую цифру');
    aha_scale_train.reset()
    psychoJS.experiment.addData('scale_aha_train.started', globalClock.getTime());
    scale_aha_trainMaxDuration = null
    // keep track of which components have finished
    scale_aha_trainComponents = [];
    scale_aha_trainComponents.push(text_aha_train);
    scale_aha_trainComponents.push(aha_scale_train);
    
    scale_aha_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function scale_aha_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'scale_aha_train' ---
    // get current time
    t = scale_aha_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_aha_train* updates
    if (t >= 0.0 && text_aha_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_aha_train.tStart = t;  // (not accounting for frame time here)
      text_aha_train.frameNStart = frameN;  // exact frame index
      
      text_aha_train.setAutoDraw(true);
    }
    
    
    // if text_aha_train is active this frame...
    if (text_aha_train.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *aha_scale_train* updates
    if (t >= 0.0 && aha_scale_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      aha_scale_train.tStart = t;  // (not accounting for frame time here)
      aha_scale_train.frameNStart = frameN;  // exact frame index
      
      aha_scale_train.setAutoDraw(true);
    }
    
    
    // if aha_scale_train is active this frame...
    if (aha_scale_train.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check aha_scale_train for response to end Routine
    if (aha_scale_train.getRating() !== undefined && aha_scale_train.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    scale_aha_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function scale_aha_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'scale_aha_train' ---
    scale_aha_trainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('scale_aha_train.stopped', globalClock.getTime());
    psychoJS.experiment.addData('aha_scale_train.response', aha_scale_train.getRating());
    psychoJS.experiment.addData('aha_scale_train.rt', aha_scale_train.getRT());
    // the Routine "scale_aha_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CE_trainMaxDurationReached;
var CE_trainMaxDuration;
var CE_trainComponents;
function CE_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CE_train' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CE_trainClock.reset();
    routineTimer.reset();
    CE_trainMaxDurationReached = false;
    // update component parameters for each repeat
    text_instruction_train.setText('Дайте ответ на виньетку по 7-ми бальной шкале, где: 1 — «точно нет», 7 — «точно да»');
    text_for_bias_train.setText(CE);
    Bias_scale_train.reset()
    psychoJS.experiment.addData('CE_train.started', globalClock.getTime());
    CE_trainMaxDuration = null
    // keep track of which components have finished
    CE_trainComponents = [];
    CE_trainComponents.push(text_instruction_train);
    CE_trainComponents.push(text_for_bias_train);
    CE_trainComponents.push(Bias_scale_train);
    
    CE_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CE_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CE_train' ---
    // get current time
    t = CE_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instruction_train* updates
    if (t >= 0.0 && text_instruction_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instruction_train.tStart = t;  // (not accounting for frame time here)
      text_instruction_train.frameNStart = frameN;  // exact frame index
      
      text_instruction_train.setAutoDraw(true);
    }
    
    
    // if text_instruction_train is active this frame...
    if (text_instruction_train.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_for_bias_train* updates
    if (t >= 0.0 && text_for_bias_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_for_bias_train.tStart = t;  // (not accounting for frame time here)
      text_for_bias_train.frameNStart = frameN;  // exact frame index
      
      text_for_bias_train.setAutoDraw(true);
    }
    
    
    // if text_for_bias_train is active this frame...
    if (text_for_bias_train.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Bias_scale_train* updates
    if (t >= 0.0 && Bias_scale_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Bias_scale_train.tStart = t;  // (not accounting for frame time here)
      Bias_scale_train.frameNStart = frameN;  // exact frame index
      
      Bias_scale_train.setAutoDraw(true);
    }
    
    
    // if Bias_scale_train is active this frame...
    if (Bias_scale_train.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check Bias_scale_train for response to end Routine
    if (Bias_scale_train.getRating() !== undefined && Bias_scale_train.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CE_trainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CE_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CE_train' ---
    CE_trainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CE_train.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Bias_scale_train.response', Bias_scale_train.getRating());
    psychoJS.experiment.addData('Bias_scale_train.rt', Bias_scale_train.getRT());
    // the Routine "CE_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_after_trMaxDurationReached;
var _key_resp_8_allKeys;
var instr_after_trMaxDuration;
var instr_after_trComponents;
function instr_after_trRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_after_tr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr_after_trClock.reset();
    routineTimer.reset();
    instr_after_trMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    psychoJS.experiment.addData('instr_after_tr.started', globalClock.getTime());
    instr_after_trMaxDuration = null
    // keep track of which components have finished
    instr_after_trComponents = [];
    instr_after_trComponents.push(text_5);
    instr_after_trComponents.push(key_resp_8);
    
    instr_after_trComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instr_after_trRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_after_tr' ---
    // get current time
    t = instr_after_trClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // if text_5 is active this frame...
    if (text_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.5 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    // if key_resp_8 is active this frame...
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
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
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instr_after_trComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_after_trRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_after_tr' ---
    instr_after_trComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr_after_tr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "instr_after_tr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CRA_3MaxDurationReached;
var _key_resp_cra_allKeys;
var CRA_3MaxDuration;
var CRA_3Components;
function CRA_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CRA_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CRA_3Clock.reset();
    routineTimer.reset();
    CRA_3MaxDurationReached = false;
    // update component parameters for each repeat
    text_cra.setText(CRA);
    key_resp_cra.keys = undefined;
    key_resp_cra.rt = undefined;
    _key_resp_cra_allKeys = [];
    psychoJS.experiment.addData('CRA_3.started', globalClock.getTime());
    CRA_3MaxDuration = null
    // keep track of which components have finished
    CRA_3Components = [];
    CRA_3Components.push(text_cra);
    CRA_3Components.push(key_resp_cra);
    
    CRA_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CRA_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CRA_3' ---
    // get current time
    t = CRA_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_cra* updates
    if (t >= 0.0 && text_cra.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_cra.tStart = t;  // (not accounting for frame time here)
      text_cra.frameNStart = frameN;  // exact frame index
      
      text_cra.setAutoDraw(true);
    }
    
    
    // if text_cra is active this frame...
    if (text_cra.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_cra.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_cra.tStop = t;  // not accounting for scr refresh
      text_cra.frameNStop = frameN;  // exact frame index
      // update status
      text_cra.status = PsychoJS.Status.FINISHED;
      text_cra.setAutoDraw(false);
    }
    
    
    // *key_resp_cra* updates
    if (t >= 0.0 && key_resp_cra.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_cra.tStart = t;  // (not accounting for frame time here)
      key_resp_cra.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_cra.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_cra.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_cra.clearEvents(); });
    }
    
    // if key_resp_cra is active this frame...
    if (key_resp_cra.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_cra.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_cra_allKeys = _key_resp_cra_allKeys.concat(theseKeys);
      if (_key_resp_cra_allKeys.length > 0) {
        key_resp_cra.keys = _key_resp_cra_allKeys[_key_resp_cra_allKeys.length - 1].name;  // just the last key pressed
        key_resp_cra.rt = _key_resp_cra_allKeys[_key_resp_cra_allKeys.length - 1].rt;
        key_resp_cra.duration = _key_resp_cra_allKeys[_key_resp_cra_allKeys.length - 1].duration;
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
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CRA_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CRA_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CRA_3' ---
    CRA_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CRA_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_cra.corr, level);
    }
    psychoJS.experiment.addData('key_resp_cra.keys', key_resp_cra.keys);
    if (typeof key_resp_cra.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_cra.rt', key_resp_cra.rt);
        psychoJS.experiment.addData('key_resp_cra.duration', key_resp_cra.duration);
        routineTimer.reset();
        }
    
    key_resp_cra.stop();
    // the Routine "CRA_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CRA_ansMaxDurationReached;
var _key_resp_4_allKeys;
var CRA_ansMaxDuration;
var CRA_ansComponents;
function CRA_ansRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CRA_ans' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CRA_ansClock.reset();
    routineTimer.reset();
    CRA_ansMaxDurationReached = false;
    // update component parameters for each repeat
    ans.setText('');
    ans.refresh();
    ans.setText('');
    ans.setPlaceholder('Напишите ответ');
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('CRA_ans.started', globalClock.getTime());
    CRA_ansMaxDuration = null
    // keep track of which components have finished
    CRA_ansComponents = [];
    CRA_ansComponents.push(ans);
    CRA_ansComponents.push(key_resp_4);
    
    CRA_ansComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CRA_ansRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CRA_ans' ---
    // get current time
    t = CRA_ansClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ans* updates
    if (t >= 0.0 && ans.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ans.tStart = t;  // (not accounting for frame time here)
      ans.frameNStart = frameN;  // exact frame index
      
      ans.setAutoDraw(true);
    }
    
    
    // if ans is active this frame...
    if (ans.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
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
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CRA_ansComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CRA_ansRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CRA_ans' ---
    CRA_ansComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CRA_ans.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ans.text',ans.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "CRA_ans" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var is_ahaMaxDurationReached;
var _key_resp_6_allKeys;
var is_ahaMaxDuration;
var is_ahaComponents;
function is_ahaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'is_aha' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    is_ahaClock.reset();
    routineTimer.reset();
    is_ahaMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('is_aha.started', globalClock.getTime());
    is_ahaMaxDuration = null
    // keep track of which components have finished
    is_ahaComponents = [];
    is_ahaComponents.push(text_4);
    is_ahaComponents.push(key_resp_6);
    
    is_ahaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function is_ahaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'is_aha' ---
    // get current time
    t = is_ahaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // if text_4 is active this frame...
    if (text_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    // if key_resp_6 is active this frame...
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({
        keyList: typeof ['y','n','н','т'] === 'string' ? [['y','n','н','т']] : ['y','n','н','т'], 
        waitRelease: false
      });
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
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
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    is_ahaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function is_ahaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'is_aha' ---
    is_ahaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('is_aha.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "is_aha" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var scale_ahaMaxDurationReached;
var scale_ahaMaxDuration;
var scale_ahaComponents;
function scale_ahaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'scale_aha' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    scale_ahaClock.reset();
    routineTimer.reset();
    scale_ahaMaxDurationReached = false;
    // update component parameters for each repeat
    aha_scale_eval.reset()
    psychoJS.experiment.addData('scale_aha.started', globalClock.getTime());
    scale_ahaMaxDuration = null
    // keep track of which components have finished
    scale_ahaComponents = [];
    scale_ahaComponents.push(aha_scale_eval_text);
    scale_ahaComponents.push(aha_scale_eval);
    
    scale_ahaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function scale_ahaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'scale_aha' ---
    // get current time
    t = scale_ahaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *aha_scale_eval_text* updates
    if (t >= 0.0 && aha_scale_eval_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      aha_scale_eval_text.tStart = t;  // (not accounting for frame time here)
      aha_scale_eval_text.frameNStart = frameN;  // exact frame index
      
      aha_scale_eval_text.setAutoDraw(true);
    }
    
    
    // if aha_scale_eval_text is active this frame...
    if (aha_scale_eval_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *aha_scale_eval* updates
    if (t >= 0.0 && aha_scale_eval.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      aha_scale_eval.tStart = t;  // (not accounting for frame time here)
      aha_scale_eval.frameNStart = frameN;  // exact frame index
      
      aha_scale_eval.setAutoDraw(true);
    }
    
    
    // if aha_scale_eval is active this frame...
    if (aha_scale_eval.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check aha_scale_eval for response to end Routine
    if (aha_scale_eval.getRating() !== undefined && aha_scale_eval.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    scale_ahaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function scale_ahaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'scale_aha' ---
    scale_ahaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('scale_aha.stopped', globalClock.getTime());
    psychoJS.experiment.addData('aha_scale_eval.response', aha_scale_eval.getRating());
    psychoJS.experiment.addData('aha_scale_eval.rt', aha_scale_eval.getRT());
    // the Routine "scale_aha" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CE_2MaxDurationReached;
var CE_2MaxDuration;
var CE_2Components;
function CE_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CE_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CE_2Clock.reset();
    routineTimer.reset();
    CE_2MaxDurationReached = false;
    // update component parameters for each repeat
    text_inst_bias.setText('Дайте ответ на виньетку по 7-ми бальной шкале, где: 1 — «точно нет», 7 — «точно да»');
    text_for_bias.setText(CE);
    Bias_scale.reset()
    psychoJS.experiment.addData('CE_2.started', globalClock.getTime());
    CE_2MaxDuration = null
    // keep track of which components have finished
    CE_2Components = [];
    CE_2Components.push(text_inst_bias);
    CE_2Components.push(text_for_bias);
    CE_2Components.push(Bias_scale);
    
    CE_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CE_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CE_2' ---
    // get current time
    t = CE_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_inst_bias* updates
    if (t >= 0.0 && text_inst_bias.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_inst_bias.tStart = t;  // (not accounting for frame time here)
      text_inst_bias.frameNStart = frameN;  // exact frame index
      
      text_inst_bias.setAutoDraw(true);
    }
    
    
    // if text_inst_bias is active this frame...
    if (text_inst_bias.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_for_bias* updates
    if (t >= 0.0 && text_for_bias.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_for_bias.tStart = t;  // (not accounting for frame time here)
      text_for_bias.frameNStart = frameN;  // exact frame index
      
      text_for_bias.setAutoDraw(true);
    }
    
    
    // if text_for_bias is active this frame...
    if (text_for_bias.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Bias_scale* updates
    if (t >= 0.0 && Bias_scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Bias_scale.tStart = t;  // (not accounting for frame time here)
      Bias_scale.frameNStart = frameN;  // exact frame index
      
      Bias_scale.setAutoDraw(true);
    }
    
    
    // if Bias_scale is active this frame...
    if (Bias_scale.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check Bias_scale for response to end Routine
    if (Bias_scale.getRating() !== undefined && Bias_scale.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CE_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CE_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CE_2' ---
    CE_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('CE_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Bias_scale.response', Bias_scale.getRating());
    psychoJS.experiment.addData('Bias_scale.rt', Bias_scale.getRT());
    // the Routine "CE_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var conclusionMaxDurationReached;
var conclusionMaxDuration;
var conclusionComponents;
function conclusionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'conclusion' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    conclusionClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    conclusionMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' +
    psychoJS._experiment._datetime + '.csv';
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
     experimentID: 'Q9tv2MnShUyj', 
     filename: filename,
     data: data,
     }),
    }).then(response => response.json()).then(data => {
    // Log response aud force experiment end
    console.log(data);
    quitPsychoJS();
    })
    psychoJS.experiment.addData('conclusion.started', globalClock.getTime());
    conclusionMaxDuration = null
    // keep track of which components have finished
    conclusionComponents = [];
    conclusionComponents.push(text_conc);
    
    conclusionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function conclusionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'conclusion' ---
    // get current time
    t = conclusionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_conc* updates
    if (t >= 0.0 && text_conc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_conc.tStart = t;  // (not accounting for frame time here)
      text_conc.frameNStart = frameN;  // exact frame index
      
      text_conc.setAutoDraw(true);
    }
    
    
    // if text_conc is active this frame...
    if (text_conc.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_conc.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_conc.tStop = t;  // not accounting for scr refresh
      text_conc.frameNStop = frameN;  // exact frame index
      // update status
      text_conc.status = PsychoJS.Status.FINISHED;
      text_conc.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    conclusionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function conclusionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'conclusion' ---
    conclusionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('conclusion.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (conclusionMaxDurationReached) {
        conclusionClock.add(conclusionMaxDuration);
    } else {
        conclusionClock.add(5.000000);
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
