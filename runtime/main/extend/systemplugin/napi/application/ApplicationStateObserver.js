/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

export const ApplicationStateObserverClass = class ApplicationStateObserver {
    constructor() {
      console.warn('ApplicationStateObserver.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.onForegroundApplicationChanged = function (...args) {
        console.warn("ApplicationStateObserver.onForegroundApplicationChanged interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
      };
      this.onAbilityStateChanged = function (...args) {
        console.warn("ApplicationStateObserver.onAbilityStateChanged interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
      };
      this.onProcessCreated = function (...args) {
        console.warn("ApplicationStateObserver.onProcessCreated interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
      };
      this.onProcessDied = function (...args) {
        console.warn("ApplicationStateObserver.onProcessDied interface mocked in the Previewer." +
          " How this interface works on the Previewer may be different from that on a real device.")
      };
    }
  }