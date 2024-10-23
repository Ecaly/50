function GameManager(size, InputManager, Actuator, ScoreManager) {
  this.size         = size; // Size of the grid
  this.inputManager = new InputManager;
  this.scoreManager = new ScoreManager;
  this.actuator     = new Actuator;

  this.startTiles   = 1;

  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

  this.setup();
}

// Restart the game
GameManager.prototype.restart = function () {
  this.actuator.continue();
  this.setup();
};

// Keep playing after winning
GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continue();
};

GameManager.prototype.isGameTerminated = function () {
  if (this.over || (this.won && !this.keepPlaying)) {
    return true;
  } else {
    return false;
  }
};

// Set up the game
GameManager.prototype.setup = function () {
  this.grid        = new Grid(this.size);

  this.score       = 0;
  this.over        = false;
  this.won         = false;
  this.keepPlaying = false;

  // Add the initial tiles
  this.addStartTiles();

  // Update the actuator
  this.actuate();
};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = Math.random() < 0.999999998 ? Math.random() < 0.99999999799599198396793587 ? Math.random() < 0.99999999799196787148594377 ? Math.random() < 0.99999999798792756539235412 ? Math.random() < 0.9999999979838709677419354838 ? Math.random() < 0.99999999797979797979797979 ? Math.random() < 0.99999999797570850202429149 ? Math.random() < 0.99999999797160243407707910 ? Math.random() < 0.99999999796747967479674796 ? Math.random() < 0.99999999796334012219959266 ? Math.random() < 0.99999999795918367346938775 ? Math.random() < 0.99999999795501022494887525 ? Math.random() < 0.99999999795081967213114754 ? Math.random() < 0.99999999794661190965092402 ? Math.random() < 0.99999999794238683127572016 ? Math.random() < 0.99999999793814432989690721 ? Math.random() < 0.99999999793388429752066115 ? Math.random() < 0.99999999792960662525879917 ? Math.random() < 0.99999999792531120331950207 ? Math.random() < 0.99999999792099792099792099 ? Math.random() < 0.99999999791666666666666666666 ? Math.random() < 0.99999999791231732776617954 ? Math.random() < 0.99999999790794790794790794 ? Math.random() < 0.99999999790356394129979035 ? Math.random() < 0.99999999789915966386554621 ? Math.random() < 0.99999999789473684210526315 ? Math.random() < 0.99999999789029535864978902 ? Math.random() < 0.99999999788583509513742071 ? Math.random() < 0.99999999788135593220338983 ? Math.random() < 0.99999999787685774946921443 ? Math.random() < 0.99999999787234042553191489 ? Math.random() < 0.99999999786780383795309168 ? Math.random() < 0.99999999786324786324786324 ? Math.random() < 0.99999999785867237687366167 ? Math.random() < 0.99999999785407725321888412 ? Math.random() < 0.99999999784946236559139784 ? Math.random() < 0.9999999978448275862068965517 ? Math.random() < 0.99999999784017278617710583 ? Math.random() < 0.99999999783549783549783549 ? Math.random() < 0.99999999783080260303687635 ? Math.random() < 0.99999999782608695652173913 ? Math.random() < 0.99999999782135076252723311 ? Math.random() < 0.99999999781659388646288209 ? Math.random() < 0.99999999781181619256017505 ? Math.random() < 0.999999997807017543859649122 ? Math.random() < 0.99999999780219780219780219 ? Math.random() < 0.99999999779735682819383259 ? Math.random() < 0.99999999779249448123620309 ? Math.random() < 0.99999999778761061946902654 ? Math.random() < 0.99999999778270509977827050 ? Math.random() < 0.99999999777777777777777777 ? Math.random() < 0.99999999777282850779510022 ? Math.random() < 0.999999997767857142857142857142 ? Math.random() < 0.99999999776286353467561521 ? Math.random() < 0.99999999775784753363228699 ? Math.random() < 0.99999999775280898876404494 ? Math.random() < 0.99999999774774774774774774 ? Math.random() < 0.99999999774266365688487584 ? Math.random() < 0.99999999773755656108597285 ? Math.random() < 0.99999999773242630385487528 ? Math.random() < 0.999999997727272727272727272 ? Math.random() < 0.99999999772209567198177676 ? Math.random() < 0.99999999771689497716894977 ? Math.random() < 0.99999999771167048054919908 ? Math.random() < 0.99999999770642201834862385 ? Math.random() < 0.99999999770114942528735632 ? Math.random() < 0.99999999769585253456221198 ? Math.random() < 0.99999999769053117782909930 ? Math.random() < 0.9999999976851851851851851851 ? Math.random() < 0.99999999767981438515081206 ? Math.random() < 0.99999999767441860465116279 ? Math.random() < 0.99999999766899766899766899 ? Math.random() < 0.99999999766355140186915887 ? Math.random() < 0.99999999765807962529274004 ? Math.random() < 0.99999999765258215962441314 ? Math.random() < 0.99999999764705882352941176 ? Math.random() < 0.99999999764150943396226415 ? Math.random() < 0.99999999763593380614657210 ? Math.random() < 0.99999999763033175355450236 ? Math.random() < 0.999999997624703087885985748 ? Math.random() < 0.99999999761904761904761904 ? Math.random() < 0.99999999761336515513126491 ? Math.random() < 0.99999999760765550239234449 ? Math.random() < 0.99999999760191846522781774 ? Math.random() < 0.99999999759615384615384615384 ? Math.random() < 0.99999999759036144578313253 ? Math.random() < 0.99999999758454106280193236 ? Math.random() < 0.99999999757869249394673123 ? Math.random() < 0.99999999757281553398058252 ? Math.random() < 0.99999999756690997566909975 ? Math.random() < 0.99999999756097560975609756 ? Math.random() < 0.99999999755501222493887530 ? Math.random() < 0.99999999754901960784313725 ? Math.random() < 0.99999999754299754299754299 ? Math.random() < 0.99999999753694581280788177 ? Math.random() < 0.99999999753086419753086419 ? Math.random() < 0.99999999752475247524752475 ? Math.random() < 0.99999999751861042183622828 ? Math.random() < 0.99999999751243781094527363 ? Math.random() < 0.99999999750623441396508728 ? Math.random() < 0.9999999975 ? Math.random() < 0.99999999749373433583959899 ? Math.random() < 0.99999999748743718592964824 ? Math.random() < 0.99999999748110831234256926 ? Math.random() < 0.99999999747474747474747474 ? Math.random() < 0.99999999746835443037974683 ? Math.random() < 0.99999999746192893401015228 ? Math.random() < 0.99999999745547073791348600 ? Math.random() < 0.999999997448979591836734693 ? Math.random() < 0.99999999744245524296675191 ? Math.random() < 0.99999999743589743589743589 ? Math.random() < 0.99999999742930591259640102 ? Math.random() < 0.99999999742268041237113402 ? Math.random() < 0.99999999741602067183462532 ? Math.random() < 0.99999999740932642487046632 ? Math.random() < 0.99999999740259740259740259 ? Math.random() < 0.9999999973958333333333333333333 ? Math.random() < 0.99999999738903394255874673 ? Math.random() < 0.99999999738219895287958115 ? Math.random() < 0.99999999737532808398950131 ? Math.random() < 0.99999999736842105263157894 ? Math.random() < 0.99999999736147757255936675 ? Math.random() < 0.99999999735449735449735449 ? Math.random() < 0.99999999734748010610079575 ? Math.random() < 0.99999999734042553191489361 ? Math.random() < 0.999999997333333333333333333 ? Math.random() < 0.99999999732620320855614973 ? Math.random() < 0.99999999731903485254691689 ? Math.random() < 0.99999999731182795698924731 ? Math.random() < 0.99999999730458221024258760 ? Math.random() < 0.99999999729729729729729729 ? Math.random() < 0.99999999728997289972899728 ? Math.random() < 0.99999999728260869565217391 ? Math.random() < 0.99999999727520435967302452 ? Math.random() < 0.99999999726775956284153005 ? Math.random() < 0.99999999726027397260273972 ? Math.random() < 0.99999999725274725274725274 ? Math.random() < 0.999999997245179063360881542 ? Math.random() < 0.99999999723756906077348066 ? Math.random() < 0.99999999722991689750692520 ? Math.random() < 0.999999997222222222222222222 ? Math.random() < 0.99999999721448467966573816 ? Math.random() < 0.99999999720670391061452513 ? Math.random() < 0.99999999719887955182072829 ? Math.random() < 0.99999999719101123595505617 ? Math.random() < 0.99999999718309859154929577 ? Math.random() < 0.99999999717514124293785310 ? Math.random() < 0.99999999716713881019830028 ? Math.random() < 0.99999999715909090909090909090 ? Math.random() < 0.99999999715099715099715099 ? Math.random() < 0.99999999714285714285714285 ? Math.random() < 0.99999999713467048710601719 ? Math.random() < 0.99999999712643678160919540 ? Math.random() < 0.99999999711815561959654178 ? Math.random() < 0.99999999710982658959537572 ? Math.random() < 0.99999999710144927536231884 ? Math.random() < 0.99999999709302325581395348 ? Math.random() < 0.99999999708454810495626822 ? Math.random() < 0.99999999707602339181286549 ? Math.random() < 0.99999999706744868035190615 ? Math.random() < 0.99999999705882352941176470 ? Math.random() < 0.99999999705014749262536873 ? Math.random() < 0.99999999704142011834319526 ? Math.random() < 0.99999999703264094955489614 ? Math.random() < 0.9999999970238095238095238095 ? Math.random() < 0.99999999701492537313432835 ? Math.random() < 0.99999999700598802395209580 ? Math.random() < 0.99999999699699699699699699 ? Math.random() < 0.99999999698795180722891566 ? Math.random() < 0.99999999697885196374622356 ? Math.random() < 0.99999999696969696969696969 ? Math.random() < 0.99999999696048632218844984 ? Math.random() < 0.999999996951219512195121951 ? Math.random() < 0.99999999694189602446483180 ? Math.random() < 0.99999999693251533742331288 ? Math.random() < 0.99999999692307692307692307 ? Math.random() < 0.99999999691358024691358024 ? Math.random() < 0.99999999690402476780185758 ? Math.random() < 0.99999999689440993788819875 ? Math.random() < 0.99999999688473520249221183 ? Math.random() < 0.999999996875 ? Math.random() < 0.99999999686520376175548589 ? Math.random() < 0.99999999685534591194968553 ? Math.random() < 0.99999999684542586750788643 ? Math.random() < 0.99999999683544303797468354 ? Math.random() < 0.99999999682539682539682539 ? Math.random() < 0.99999999681528662420382165 ? Math.random() < 0.99999999680511182108626198 ? Math.random() < 0.999999996794871794871794871 ? Math.random() < 0.99999999678456591639871382 ? Math.random() < 0.99999999677419354838709677 ? Math.random() < 0.99999999676375404530744336 ? Math.random() < 0.99999999675324675324675324 ? Math.random() < 0.99999999674267100977198697 ? Math.random() < 0.99999999673202614379084967 ? Math.random() < 0.99999999672131147540983606 ? Math.random() < 0.99999999671052631578947368 ? Math.random() < 0.99999999669966996699669966 ? Math.random() < 0.99999999668874172185430463 ? Math.random() < 0.99999999667774086378737541 ? Math.random() < 0.99999999666666666666666666 ? Math.random() < 0.99999999665551839464882943 ? Math.random() < 0.99999999664429530201342281 ? Math.random() < 0.99999999663299663299663299 ? Math.random() < 0.999999996621621621621621621 ? Math.random() < 0.99999999661016949152542372 ? Math.random() < 0.99999999659863945578231292 ? Math.random() < 0.99999999658703071672354948 ? Math.random() < 0.99999999657534246575342465 ? Math.random() < 0.99999999656357388316151202 ? Math.random() < 0.99999999655172413793103448 ? Math.random() < 0.99999999653979238754325259 ? Math.random() < 0.99999999652777777777777777777 ? Math.random() < 0.99999999651567944250871080 ? Math.random() < 0.99999999650349650349650349 ? Math.random() < 0.99999999649122807017543859 ? Math.random() < 0.99999999647887323943661971 ? Math.random() < 0.99999999646643109540636042 ? Math.random() < 0.99999999645390070921985815 ? Math.random() < 0.99999999644128113879003558 ? Math.random() < 0.999999996428571428571428571 ? Math.random() < 0.99999999641577060931899641 ? Math.random() < 0.99999999640287769784172661 ? Math.random() < 0.99999999638989169675090252 ? Math.random() < 0.99999999637681159420289855 ? Math.random() < 0.99999999636363636363636363 ? Math.random() < 0.99999999635036496350364963 ? Math.random() < 0.99999999633699633699633699 ? Math.random() < 0.99999999632352941176470588 ? Math.random() < 0.99999999630996309963099630 ? Math.random() < 0.99999999629629629629629629 ? Math.random() < 0.99999999628252788104089219 ? Math.random() < 0.99999999626865671641791044 ? Math.random() < 0.99999999625468164794007490 ? Math.random() < 0.99999999624060150375939849 ? Math.random() < 0.99999999622641509433962264 ? Math.random() < 0.999999996212121212121212121 ? Math.random() < 0.99999999619771863117870722 ? Math.random() < 0.99999999618320610687022900 ? Math.random() < 0.99999999616858237547892720 ? Math.random() < 0.99999999615384615384615384 ? Math.random() < 0.99999999613899613899613899 ? Math.random() < 0.99999999612403100775193798 ? Math.random() < 0.99999999610894941634241245 ? Math.random() < 0.99999999609375 ? Math.random() < 0.99999999607843137254901960 ? Math.random() < 0.99999999606299212598425196 ? Math.random() < 0.99999999604743083003952569 ? Math.random() < 0.99999999603174603174603174 ? Math.random() < 0.99999999601593625498007968 ? Math.random() < 0.999999996 ? Math.random() < 0.99999999598393574297188755 ? Math.random() < 0.99999999596774193548387096 ? Math.random() < 0.99999999595141700404858299 ? Math.random() < 0.99999999593495934959349593 ? Math.random() < 0.99999999591836734693877551 ? Math.random() < 0.99999999590163934426229508 ? Math.random() < 0.99999999588477366255144032 ? Math.random() < 0.9999999958677685950413223 ? Math.random() < 0.99999999585062240663900414 ? Math.random() < 0.9999999958333333333333333333 ? Math.random() < 0.99999999581589958158995815 ? Math.random() < 0.99999999579831932773109243 ? Math.random() < 0.99999999578059071729957805 ? Math.random() < 0.9999999957627118644067796 ? Math.random() < 0.99999999574468085106382978 ? Math.random() < 0.99999999572649572649572649 ? Math.random() < 0.99999999570815450643776824 ? Math.random() < 0.99999999568965517241379310 ? Math.random() < 0.99999999567099567099567099 ? Math.random() < 0.99999999565217391304347826 ? Math.random() < 0.99999999563318777292576419 ? Math.random() < 0.99999999561403508771929824 ? Math.random() < 0.99999999559471365638766519 ? Math.random() < 0.99999999557522123893805309 ? Math.random() < 0.99999999555555555555555555 ? Math.random() < 0.99999999553571428571428571428 ? Math.random() < 0.99999999551569506726457399 ? Math.random() < 0.99999999549549549549549549 ? Math.random() < 0.99999999547511312217194570 ? Math.random() < 0.99999999545454545454545454 ? Math.random() < 0.99999999543378995433789954 ? Math.random() < 0.99999999541284403669724770 ? Math.random() < 0.99999999539170506912442396 ? Math.random() < 0.999999995370370370370370370 ? Math.random() < 0.99999999534883720930232558 ? Math.random() < 0.99999999532710280373831775 ? Math.random() < 0.99999999530516431924882629 ? Math.random() < 0.99999999528301886792452830 ? Math.random() < 0.99999999526066350710900473 ? Math.random() < 0.99999999523809523809523809 ? Math.random() < 0.99999999521531100478468899 ? Math.random() < 0.9999999951923076923076923076 ? Math.random() < 0.99999999516908212560386473 ? Math.random() < 0.99999999514563106796116504 ? Math.random() < 0.99999999512195121951219512 ? Math.random() < 0.99999999509803921568627450 ? Math.random() < 0.99999999507389162561576354 ? Math.random() < 0.99999999504950495049504950 ? Math.random() < 0.99999999502487562189054726 ? Math.random() < 0.999999995 ? Math.random() < 0.99999999497487437185929648 ? Math.random() < 0.99999999494949494949494949 ? Math.random() < 0.99999999492385786802030456 ? Math.random() < 0.99999999489795918367346938 ? Math.random() < 0.99999999487179487179487179 ? Math.random() < 0.99999999484536082474226804 ? Math.random() < 0.99999999481865284974093264 ? Math.random() < 0.999999994791666666666666666666 ? Math.random() < 0.99999999476439790575916230 ? Math.random() < 0.99999999473684210526315789 ? Math.random() < 0.99999999470899470899470899 ? Math.random() < 0.99999999468085106382978723 ? Math.random() < 0.99999999465240641711229946 ? Math.random() < 0.99999999462365591397849462 ? Math.random() < 0.99999999459459459459459459 ? Math.random() < 0.99999999456521739130434782 ? Math.random() < 0.99999999453551912568306010 ? Math.random() < 0.99999999450549450549450549 ? Math.random() < 0.99999999447513812154696132 ? Math.random() < 0.99999999444444444444444444 ? Math.random() < 0.99999999441340782122905027 ? Math.random() < 0.99999999438202247191011235 ? Math.random() < 0.99999999435028248587570621 ? Math.random() < 0.9999999943181818181818181818 ? Math.random() < 0.99999999428571428571428571 ? Math.random() < 0.99999999425287356321839080 ? Math.random() < 0.99999999421965317919075144 ? Math.random() < 0.99999999418604651162790697 ? Math.random() < 0.99999999415204678362573099 ? Math.random() < 0.99999999411764705882352941 ? Math.random() < 0.99999999408284023668639053 ? Math.random() < 0.999999994047619047619047619 ? Math.random() < 0.99999999401197604790419161 ? Math.random() < 0.99999999397590361445783132 ? Math.random() < 0.99999999393939393939393939 ? Math.random() < 0.99999999390243902439024390 ? Math.random() < 0.99999999386503067484662576 ? Math.random() < 0.99999999382716049382716049 ? Math.random() < 0.99999999378881987577639751 ? Math.random() < 0.99999999375 ? Math.random() < 0.99999999371069182389937106 ? Math.random() < 0.99999999367088607594936708 ? Math.random() < 0.99999999363057324840764331 ? Math.random() < 0.99999999358974358974358974 ? Math.random() < 0.99999999354838709677419354 ? Math.random() < 0.99999999350649350649350649 ? Math.random() < 0.99999999346405228758169934 ? Math.random() < 0.999999993421052631578947368 ? Math.random() < 0.99999999337748344370860927 ? Math.random() < 0.99999999333333333333333333 ? Math.random() < 0.99999999328859060402684563 ? Math.random() < 0.99999999324324324324324324 ? Math.random() < 0.99999999319727891156462585 ? Math.random() < 0.99999999315068493150684931 ? Math.random() < 0.99999999310344827586206896 ? Math.random() < 0.9999999930555555555555555555 ? Math.random() < 0.99999999300699300699300699 ? Math.random() < 0.99999999295774647887323943 ? Math.random() < 0.99999999290780141843971631 ? Math.random() < 0.99999999285714285714285714 ? Math.random() < 0.99999999280575539568345323 ? Math.random() < 0.99999999275362318840579710 ? Math.random() < 0.99999999270072992700729927 ? Math.random() < 0.99999999264705882352941176 ? Math.random() < 0.99999999259259259259259259 ? Math.random() < 0.99999999253731343283582089 ? Math.random() < 0.99999999248120300751879699 ? Math.random() < 0.99999999242424242424242424 ? Math.random() < 0.99999999236641221374045801 ? Math.random() < 0.99999999230769230769230769 ? Math.random() < 0.99999999224806201550387596 ? Math.random() < 0.9999999921875 ? Math.random() < 0.99999999212598425196850393 ? Math.random() < 0.99999999206349206349206349 ? Math.random() < 0.999999992 ? Math.random() < 0.99999999193548387096774193 ? Math.random() < 0.99999999186991869918699186 ? Math.random() < 0.99999999180327868852459016 ? Math.random() < 0.99999999173553719008264462 ? Math.random() < 0.999999991666666666666666666 ? Math.random() < 0.99999999159663865546218487 ? Math.random() < 0.99999999152542372881355932 ? Math.random() < 0.99999999145299145299145299 ? Math.random() < 0.99999999137931034482758620 ? Math.random() < 0.99999999130434782608695652 ? Math.random() < 0.99999999122807017543859649 ? Math.random() < 0.99999999115044247787610619 ? Math.random() < 0.9999999910714285714285714285 ? Math.random() < 0.99999999099099099099099099 ? Math.random() < 0.99999999090909090909090909 ? Math.random() < 0.99999999082568807339449541 ? Math.random() < 0.99999999074074074074074074 ? Math.random() < 0.99999999065420560747663551 ? Math.random() < 0.99999999056603773584905660 ? Math.random() < 0.99999999047619047619047619 ? Math.random() < 0.999999990384615384615384615 ? Math.random() < 0.99999999029126213592233009 ? Math.random() < 0.99999999019607843137254901 ? Math.random() < 0.99999999009900990099009900 ? Math.random() < 0.99999999 ? Math.random() < 0.9999999898989898989898989 ? Math.random() < 0.9999999897959183673469387 ? Math.random() < 0.9999999896907216494845360 ? Math.random() < 0.99999998958333333333333333333 ? Math.random() < 0.9999999894736842105263157 ? Math.random() < 0.9999999893617021276595744 ? Math.random() < 0.9999999892473118279569892 ? Math.random() < 0.9999999891304347826086956 ? Math.random() < 0.9999999890109890109890109 ? Math.random() < 0.9999999888888888888888888 ? Math.random() < 0.9999999887640449438202247 ? Math.random() < 0.999999988636363636363636363 ? Math.random() < 0.9999999885057471264367816 ? Math.random() < 0.9999999883720930232558139 ? Math.random() < 0.9999999882352941176470588 ? Math.random() < 0.99999998809523809523809523 ? Math.random() < 0.9999999879518072289156626 ? Math.random() < 0.9999999878048780487804878 ? Math.random() < 0.9999999876543209876543209 ? Math.random() < 0.9999999875 ? Math.random() < 0.9999999873417721518987341 ? Math.random() < 0.9999999871794871794871794 ? Math.random() < 0.9999999870129870129870129 ? Math.random() < 0.9999999868421052631578947 ? Math.random() < 0.99999998666666666666666666 ? Math.random() < 0.9999999864864864864864864 ? Math.random() < 0.9999999863013698630136986 ? Math.random() < 0.999999986111111111111111111 ? Math.random() < 0.9999999859154929577464788 ? Math.random() < 0.9999999857142857142857142 ? Math.random() < 0.9999999855072463768115942 ? Math.random() < 0.9999999858823529411764705 ? Math.random() < 0.9999999850746268656716417 ? Math.random() < 0.9999999848484848484848484 ? Math.random() < 0.9999999846153846153846153 ? Math.random() < 0.999999984375 ? Math.random() < 0.9999999841269841269841269 ? Math.random() < 0.9999999838709677419354838 ? Math.random() < 0.9999999836065573770491803 ? Math.random() < 0.99999998333333333333333333 ? Math.random() < 0.9999999830508474576271186 ? Math.random() < 0.9999999827586206896551724 ? Math.random() < 0.9999999824561403508771929 ? Math.random() < 0.999999982142857142857142857 ? Math.random() < 0.9999999818181818181818181 ? Math.random() < 0.9999999814814814814814814 ? Math.random() < 0.9999999811320754716981132 ? Math.random() < 0.99999998076923076923076923 ? Math.random() < 0.9999999803921568627450980 ? Math.random() < 0.99999998 ? Math.random() < 0.9999999795918367346938775 ? Math.random() < 0.9999999791666666666666666666 ? Math.random() < 0.9999999787234042553191489 ? Math.random() < 0.9999999782608695652173913 ? Math.random() < 0.9999999777777777777777777 ? Math.random() < 0.99999997727272727272727272 ? Math.random() < 0.9999999767441860465116279 ? Math.random() < 0.9999999761904761904761904 ? Math.random() < 0.9999999756097560975609756 ? Math.random() < 0.999999975 ? Math.random() < 0.9999999743589743589743589 ? Math.random() < 0.9999999736842105263157894 ? Math.random() < 0.9999999729729729729729729 ? Math.random() < 0.99999997222222222222222222 ? Math.random() < 0.9999999714285714285714285 ? Math.random() < 0.9999999705882352941176470 ? Math.random() < 0.9999999696969696969696969 ? Math.random() < 0.99999996875 ? Math.random() < 0.9999999677419354838709677 ? Math.random() < 0.9999999666666666666666666 ? Math.random() < 0.9999999655172413793103448 ? Math.random() < 0.99999996428571428571428571 ? Math.random() < 0.9999999629629629629629629 ? Math.random() < 0.9999999615384615384615384 ? Math.random() < 0.99999996 ? Math.random() < 0.999999958333333333333333333 ? Math.random() < 0.9999999565217391304347826 ? Math.random() < 0.9999999545454545454545454 ? Math.random() < 0.9999999523809523809523809 ? Math.random() < 0.99999995 ? Math.random() < 0.9999999473684210526315789 ? Math.random() < 0.9999999444444444444444444 ? Math.random() < 0.9999999411764705882352941 ? Math.random() < 0.9999999375 ? Math.random() < 0.9999999333333333333333333 ? Math.random() < 0.9999999285714285714285714 ? Math.random() < 0.9999999230769230769230769 ? Math.random() < 0.99999991666666666666666666 ? Math.random() < 0.9999999090909090909090909 ? Math.random() < 0.9999999 ? Math.random() < 0.999999888888888888888888 ? Math.random() < 0.999999875 ? Math.random() < 0.999999857142857142857142 ? Math.random() < 0.9999998333333333333333333 ? Math.random() < 0.9999998 ? Math.random() < 0.99999975 ? Math.random() < 0.999999666666666666666666 ? Math.random() < 0.9999995 ? Math.random() < 0.999999 ? 0 : 1 : 2 : 3 : 4 : 5 : 6 : 7 : 8 : 9 : 10 : 11 : 12 : 13 : 14 : 15 : 16 : 17 : 18 : 19 : 20 : 21 : 22 : 23 : 24 : 25 : 26 : 27 : 28 : 29 : 30 : 31 : 32 : 33 : 34 : 35 : 36 : 37 : 38 : 39 : 40 : 41 : 42 : 43 : 44 : 45 : 46 : 47 : 48 : 49 : 50 : 51 : 52 : 53 : 54 : 55 : 56 : 57 : 58 : 59 : 60 : 61 : 62 : 63 : 64 : 65 : 66 : 67 : 68 : 69 : 70 : 71 : 72 : 73 : 74 : 75 : 76 : 77 : 78 : 79 : 80 : 81 : 82 : 83 : 84 : 85 : 86 : 87 : 88 : 89 : 90 : 91 : 92 : 93 : 94 : 95 : 96 : 97 : 98 : 99 : 100 : 101 : 102 : 103 : 104 : 105 : 106 : 107 : 108 : 109 : 110 : 111 : 112 : 113 : 114 : 115 : 116 : 117 : 118 : 119 : 120 : 121 : 122 : 123 : 124 : 125 : 126 : 127 : 128 : 129 : 130 : 131 : 132 : 133 : 134 : 135 : 136 : 137 : 138 : 139 : 140 : 141 : 142 : 143 : 144 : 145 : 146 : 147 : 148 : 149 : 150 : 151 : 152 : 153 : 154 : 155 : 156 : 157 : 158 : 159 : 160 : 161 : 162 : 163 : 164 : 165 : 166 : 167 : 168 : 169 : 170 : 171 : 172 : 173 : 174 : 175 : 176 : 177 : 178 : 179 : 180 : 181 : 182 : 183 : 184 : 185 : 186 : 187 : 188 : 189 : 190 : 191 : 192 : 193 : 194 : 195 : 196 : 197 : 198 : 199 : 200 : 201 : 202 : 203 : 204 : 205 : 206 : 207 : 208 : 209 : 210 : 211 : 212 : 213 : 214 : 215 : 216 : 217 : 218 : 219 : 220 : 221 : 222 : 223 : 224 : 225 : 226 : 227 : 228 : 229 : 230 : 231 : 232 : 233 : 234 : 235 : 236 : 237 : 238 : 239 : 240 : 241 : 242 : 243 : 244 : 245 : 246 : 247 : 248 : 249 : 250 : 251 : 252 : 253 : 254 : 255 : 256 : 257 : 258 : 259 : 260 : 261 : 262 : 263 : 264 : 265 : 266 : 267 : 268 : 269 : 270 : 271 : 272 : 273 : 274 : 275 : 276 : 277 : 278 : 279 : 280 : 281 : 282 : 283 : 284 : 285 : 286 : 287 : 288 : 289 : 290 : 291 : 292 : 293 : 294 : 295 : 296 : 297 : 298 : 299 : 300 : 301 : 302 : 303 : 304 : 305 : 306 : 307 : 308 : 309 : 310 : 311 : 312 : 313 : 314 : 315 : 316 : 317 : 318 : 319 : 320 : 321 : 322 : 323 : 324 : 325 : 326 : 327 : 328 : 329 : 330 : 331 : 332 : 333 : 334 : 335 : 336 : 337 : 338 : 339 : 340 : 341 : 342 : 343 : 344 : 345 : 346 : 347 : 348 : 349 : 350 : 351 : 352 : 353 : 354 : 355 : 356 : 357 : 358 : 359 : 360 : 361 : 362 : 363 : 364 : 365 : 366 : 367 : 368 : 369 : 370 : 371 : 372 : 373 : 374 : 375 : 376 : 377 : 378 : 379 : 380 : 381 : 382 : 383 : 384 : 385 : 386 : 387 : 388 : 389 : 390 : 391 : 392 : 393 : 394 : 395 : 396 : 397 : 398 : 399 : 400 : 401 : 402 : 403 : 404 : 405 : 406 : 407 : 408 : 409 : 410 : 411 : 412 : 413 : 414 : 415 : 416 : 417 : 418 : 419 : 420 : 421 : 422 : 423 : 424 : 425 : 426 : 427 : 428 : 429 : 430 : 431 : 432 : 433 : 434 : 435 : 436 : 437 : 438 : 439 : 440 : 441 : 442 : 443 : 444 : 445 : 446 : 447 : 448 : 449 : 450 : 451 : 452 : 453 : 454 : 455 : 456 : 457 : 458 : 459 : 460 : 461 : 462 : 463 : 464 : 465 : 466 : 467 : 468 : 469 : 470 : 471 : 472 : 473 : 474 : 475 : 476 : 477 : 478 : 479 : 480 : 481 : 482 : 483 : 484 : 485 : 486 : 487 : 488 : 489 : 490 : 491 : 492 : 493 : 494 : 495 : 496 : 497 : 498 : 499 : 500;
    var tile = new Tile(this.grid.randomAvailableCell(), value);
    if (tile.value === 50) this.won = true;
    
    this.grid.insertTile(tile);
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.scoreManager.get() < this.score) {
    this.scoreManager.set(this.score);
  }

  this.actuator.actuate(this.grid, {
    score:      this.score,
    over:       this.over,
    won:        this.won,
    bestScore:  this.scoreManager.get(),
    terminated: this.isGameTerminated()
  });

};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2:down, 3: left
  var self = this;

  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);

      if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next      = self.grid.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) {
          var merged = new Tile(positions.next, tile.value * 1);
          merged.mergedFrom = [tile, next];

          self.grid.insertTile(merged);
          self.grid.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.score += 1;

          // The mighty tile
          if (merged.value === 50) self.won = true;
          if (merged.value === 337) self.over = true;
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0,  y: -1 }, // up
    1: { x: 1,  y: 0 },  // right
    2: { x: 0,  y: 1 },  // down
    3: { x: -1, y: 0 }   // left
  };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) &&
           this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};
