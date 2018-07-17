/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isGameOver;
function isGameOver(state) {
  if (state.currentTurn === 8) return true;
  return state.wins.reduce((result, win, i) => {
    if (result) return result;

    if (state.board[win[0]].innerText === state.players[state.currentTurn % 2] && state.board[win[1]].innerText === state.players[state.currentTurn % 2] && state.board[win[2]].innerText === state.players[state.currentTurn % 2]) {
      state.winningCondition = i;
      state.gameOverFlag = true;
      return true;
    }
    return result;
  }, false);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getComputerMove;

var _helpers = __webpack_require__(8);

function getComputerMove(state) {
  for (let i = 0; i < 8; i += 1) {
    const win = state.wins[i];
    if (state.board[win[0]].innerText === 'O' && state.board[win[1]].innerText === 'O' && state.board[win[2]].innerText === '') {
      return win[2];
    }
    if (state.board[win[0]].innerText === 'O' && state.board[win[2]].innerText === 'O' && state.board[win[1]].innerText === '') {
      return win[1];
    }
    if (state.board[win[1]].innerText === 'O' && state.board[win[2]].innerText === 'O' && state.board[win[0]].innerText === '') {
      return win[0];
    }
  }
  for (let i = 0; i < 8; i += 1) {
    const win = state.wins[i];
    if (state.board[win[0]].innerText === 'X' && state.board[win[1]].innerText === 'X' && state.board[win[2]].innerText === '') {
      return win[2];
    }
    if (state.board[win[0]].innerText === 'X' && state.board[win[2]].innerText === 'X' && state.board[win[1]].innerText === '') {
      return win[1];
    }
    if (state.board[win[1]].innerText === 'X' && state.board[win[2]].innerText === 'X' && state.board[win[0]].innerText === '') {
      return win[0];
    }
  }
  if (state.currentTurn === 1) {
    if (state.board[4].innerText === '') {
      return 4;
    }
    return (0, _helpers.getCornerBox)(state);
  }
  if (state.currentTurn === 3) {
    if (state.board[0].innerText === 'X' && state.board[4].innerText === 'X' && state.board[8].innerText === 'O' || state.board[0].innerText === 'O' && state.board[4].innerText === 'X' && state.board[8].innerText === 'X' || state.board[2].innerText === 'X' && state.board[4].innerText === 'X' && state.board[6].innerText === 'O' || state.board[2].innerText === 'O' && state.board[4].innerText === 'X' && state.board[6].innerText === 'X') {
      return (0, _helpers.getCornerBox)(state);
    }
  }
  if ((0, _helpers.isFork)(state)) return (0, _helpers.getForkBlocker)(state);
  if (state.board[0].innerText === 'X' && state.board[8].innerText === 'X' || state.board[2].innerText === 'X' && state.board[6].innerText === 'X') {
    return (0, _helpers.getSideBox)(state);
  }
  return (0, _helpers.getEmptyBox)(state);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const board = [...document.querySelectorAll('div.square')];
const winner = document.getElementById('winner');
const players = ['X', 'O'];
const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const forks = [[1, 3, 0], [1, 5, 2], [3, 7, 6], [5, 7, 8]];
const gameOverFlag = false;
const currentTurn = 0;
const winningCondition = -1;

exports.board = board;
exports.winner = winner;
exports.players = players;
exports.wins = wins;
exports.forks = forks;
exports.gameOverFlag = gameOverFlag;
exports.currentTurn = currentTurn;
exports.winningCondition = winningCondition;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(4);

var _state = __webpack_require__(2);

var state = _interopRequireWildcard(_state);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function main() {
  state.winner.addEventListener('click', e => {
    e.target.click = (0, _game.resetGame)(state);
  });
  state.board.forEach(square => {
    square.addEventListener('click', e => {
      (0, _game.playGame)(e);
    });
  });
}

main();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _playGame = __webpack_require__(5);

Object.defineProperty(exports, 'playGame', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_playGame).default;
  }
});

var _isGameOver = __webpack_require__(0);

Object.defineProperty(exports, 'isGameOver', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_isGameOver).default;
  }
});

var _getComputerMove = __webpack_require__(1);

Object.defineProperty(exports, 'getComputerMove', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_getComputerMove).default;
  }
});

var _resetGame = __webpack_require__(14);

Object.defineProperty(exports, 'resetGame', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_resetGame).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = playGame;

var _isGameOver = __webpack_require__(0);

var _isGameOver2 = _interopRequireDefault(_isGameOver);

var _showResult = __webpack_require__(6);

var _showResult2 = _interopRequireDefault(_showResult);

var _getComputerMove = __webpack_require__(1);

var _getComputerMove2 = _interopRequireDefault(_getComputerMove);

var _state = __webpack_require__(2);

var state = _interopRequireWildcard(_state);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function playGame(e) {
  if (e.target.innerText === '' && !state.gameOverFlag) {
    e.target.innerText = state.players[state.currentTurn % 2];
    if ((0, _isGameOver2.default)(state)) {
      return (0, _showResult2.default)(state);
    }
    state.currentTurn += 1;
    if (state.currentTurn % 2 === 1) {
      const computerMove = (0, _getComputerMove2.default)(state);
      state.board[computerMove].innerText = state.players[state.currentTurn % 2];
      if ((0, _isGameOver2.default)(state)) {
        return (0, _showResult2.default)(state);
      }
      state.currentTurn += 1;
    }
  }
  return false;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showResult;

var _showWinningSquares = __webpack_require__(7);

var _showWinningSquares2 = _interopRequireDefault(_showWinningSquares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showResult(state) {
  const winnerString = state.currentTurn % 2 === 1 ? 'O is the winner!' : 'This game is a draw!';
  state.winner.innerHTML = `${winnerString} <i class="fa fa-refresh fa-spin"></i>`;
  state.winner.style.visibility = 'visible';
  if (state.gameOverFlag) (0, _showWinningSquares2.default)(state);
  return false;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = showWinningSquares;
function showWinningSquares({ wins, board, winningCondition }) {
  const winningSquares = wins[winningCondition];
  winningSquares.forEach(square => {
    board[square].className += ` win-${winningCondition}`;
  });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getCornerBox = __webpack_require__(9);

Object.defineProperty(exports, 'getCornerBox', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_getCornerBox).default;
  }
});

var _getEmptyBox = __webpack_require__(10);

Object.defineProperty(exports, 'getEmptyBox', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_getEmptyBox).default;
  }
});

var _getForkBlocker = __webpack_require__(11);

Object.defineProperty(exports, 'getForkBlocker', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_getForkBlocker).default;
  }
});

var _getSideBox = __webpack_require__(12);

Object.defineProperty(exports, 'getSideBox', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_getSideBox).default;
  }
});

var _isFork = __webpack_require__(13);

Object.defineProperty(exports, 'isFork', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_isFork).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCornerBox;
function getCornerBox(state) {
  const corners = [0, 2, 6, 8];
  const temp = [];
  for (let i = 0; i < 4; i += 1) {
    if (state.board[corners[i]].innerText === '') {
      temp.push(corners[i]);
    }
  }
  const randomIndex = Math.floor(Math.random() * temp.length);
  return temp[randomIndex];
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getEmptyBox;
function getEmptyBox({ board }) {
  const temp = [];
  for (let i = 0; i < 9; i += 1) {
    if (board[i].innerText === '') {
      temp.push(i);
    }
  }
  const randomIndex = Math.floor(Math.random() * temp.length);
  return temp[randomIndex];
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getForkBlocker;
function getForkBlocker({ forks, board }) {
  for (let i = 0; i < 4; i += 1) {
    const fork = forks[i];
    if (board[fork[0]].innerText === 'X' && board[fork[1]].innerText === 'X' && board[fork[2]].innerText === '') {
      return fork[2];
    }
  }
  return false;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSideBox;
function getSideBox(state) {
  const corners = [1, 3, 5, 7];
  const temp = [];
  for (let i = 0; i < 4; i += 1) {
    if (state.board[corners[i]].innerText === '') {
      temp.push(corners[i]);
    }
  }
  const randomIndex = Math.floor(Math.random() * temp.length);
  return temp[randomIndex];
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFork;
function isFork({ board, forks }) {
  for (let i = 0; i < 4; i += 1) {
    const fork = forks[i];
    if (board[fork[0]].innerText === 'X' && board[fork[1]].innerText === 'X' && board[fork[2]].innerText === '') {
      return true;
    }
  }
  return false;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resetGame;
function resetGame(state) {
  state.currentTurn = 0;
  state.winner.style.visibility = 'hidden';
  state.board.forEach(square => {
    const temp = square;
    temp.innerText = '';
  });
  const winningSquares = document.querySelectorAll('div.square');
  for (let i = 0; i < winningSquares.length; i += 1) {
    winningSquares[i].classList.remove(`win-${state.winningCondition}`);
  }
  state.winningCondition = -1;
  state.gameOverFlag = false;
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map