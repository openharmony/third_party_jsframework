/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export function mockInputMonitor() {
  const touches = [{
    force: 1.67,
    globalX: 122,
    globalY: 3654,
    localX: 0,
    localY: 0,
    size: 2.03
  }];
  const changedTouches = [{
    force: 1.67,
    globalX: 122,
    globalY: 3654,
    localX: 0,
    localY: 0,
    size: 2.03
  }];
  global.systemplugin.multimodalInput = {};
  global.systemplugin.multimodalInput.inputMonitor = {
    on: function (...args) {
      console.warn('multimodalInput.inputMonitor.on interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      clearInterval(this.offInputMonitor);
      delete this.offInputMonitor;
      this.offInputMonitor = setInterval(() => {
        const value = {};
        value.type = 'up';
        value.timestamp = 318878;
        value.deviceId = 0;
        value.touches = touches;
        value.changedTouches = changedTouches;
        const len = args.length;
        if (len > 0 && typeof args[len - 1] === 'function') {
          console.warn('multimodalInput.inputMonitor.on callback.');
          args[len - 1].call(this, value);
        }
      }, 1000);
    },

    off: function (...args) {
      console.warn('multimodalInput.inputMonitor.off interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      clearInterval(this.offInputMonitor);
      delete this.offInputMonitor;
    }
  };
}

