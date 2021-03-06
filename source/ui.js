/*
JSMSX - MSX Emulator in JavaScript
Original copyright (c) 2006 Marcus Granado <mrc.gran(@)gmail.com>
Copyright (C) 2011  Guillaume Marty

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';



/**
 * @constructor
 */
JSMSX.UI = function(msx, log) {
  var self = this;
  this.msx = msx;
  this.stat = log;

  /*
   * Keyboard
   */
  $(document).
      bind('keydown', function(evt) {
        self.msx.keyboard.keydown(evt);
      }).
      bind('keyup', function(evt) {
        self.msx.keyboard.keyup(evt);
      });
};

JSMSX.UI.prototype = {
  updateStatus: function(s) {
    this.stat.textContent = s + '\n';
  }
};
