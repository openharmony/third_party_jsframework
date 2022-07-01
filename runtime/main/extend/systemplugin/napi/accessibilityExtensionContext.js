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

import { paramMock } from '../utils'
import { ExtensionContextClass } from './application/abilityContext'

export function mockAccessibilityExtensionContext() {
  const ElementAttributeNameMock = '[PC Preview] unknown element attribute name';

  const RectMock = {
    left: '[PC Preview] unknown left',
    top: '[PC Preview] unknown top',
    width: '[PC Preview] unknown width',
    height: '[PC Preview] unknown height'
  };

  const ActionNameMock = '[PC Preview] unknown action name';

  const ElementAttributeValueMock = '[PC Preview] unknown element attribute value';

  const AccessibilityElementMock = {
    attributeNames: function (...args) {
      console.warn('AccessibilityElement.attributeNames interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      return new Promise((resolve, reject) => {
        resolve([ElementAttributeNameMock]);
      });
    },
    attributeValue: function (...args) {
      console.warn('AccessibilityElement.attributeValue interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      switch (args[0]) {
        case 'rect':
        case 'screenRect':
          return new Promise((resolve, reject) => {
            resolve(RectMock);
          });
        case 'parent':
        case 'rootElement':
          return new Promise((resolve, reject) => {
            resolve(AccessibilityElementMock);
          });
        case 'children':
          return new Promise((resolve, reject) => {
            resolve([AccessibilityElementMock]);
          });
        default:
          return new Promise((resolve, reject) => {
            resolve(ElementAttributeValueMock);
          });
      }
    },
    actionNames: function (...args) {
      console.warn('AccessibilityElement.actionNames interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      return new Promise((resolve, reject) => {
        resolve([ActionNameMock]);
      });
    },
    performAction: function (...args) {
      console.warn('AccessibilityElement.performAction interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      return new Promise((resolve, reject) => {
        resolve(paramMock.paramBooleanMock);
      });
    },
    findElement: function (...args) {
      console.warn('AccessibilityElement.performAction interface mocked in the Previewer.' +
        ' How this interface works on the Previewer may be different from that on a real device.');
      if (args[0] === 'content') {
        return new Promise((resolve, reject) => {
          resolve([AccessibilityElementMock]);
        });
      } else {
        return new Promise((resolve, reject) => {
          resolve(AccessibilityElementMock);
        });
      }
    },
  };

  const accessibilityExtensionContextClass = class accessibilityExtensionContext extends ExtensionContextClass {
    setEventTypeFilter = null;
    setTargetBundleName = null;
    getFocusElement = null;
    getWindowRootElement = null;
    getWindows = null;
    executeCommonAction = null;
    gestureInject = null;
    constructor() {
      super();
      console.warn('accessibilityExtensionContext.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');

      this.setEventTypeFilter = function (...args) {
        console.warn('accessibilityExtensionContext.setEventTypeFilter interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        const len = args.length;
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve(paramMock.paramBooleanMock);
          });
        }
      };

      this.setTargetBundleName = function (...args) {
        console.warn('accessibilityExtensionContext.setTargetBundleName interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        const len = args.length;
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve(paramMock.paramBooleanMock);
          });
        }
      };

      this.getFocusElement = function (...args) {
        console.warn('accessibilityExtensionContext.getFocusElement interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        const len = args.length;
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, AccessibilityElementMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve(AccessibilityElementMock);
          });
        }
      };

      this.getWindowRootElement = function (...args) {
        console.warn('accessibilityExtensionContext.getWindowRootElement interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        const len = args.length;
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, AccessibilityElementMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve(AccessibilityElementMock);
          });
        }
      };

      this.getWindows = function (...args) {
        console.warn('accessibilityExtensionContext.getWindows interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        const len = args.length;
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, [AccessibilityElementMock]);
        } else {
          return new Promise((resolve, reject) => {
            resolve([AccessibilityElementMock]);
          });
        }
      };

      this.gestureInject = function (...args) {
        console.warn('accessibilityExtensionContext.gestureInject interface mocked in the Previewer.' +
          ' How this interface works on the Previewer may be different from that on a real device.');
        const len = args.length;
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
        } else {
          return new Promise((resolve, reject) => {
            resolve(paramMock.paramBooleanMock);
          });
        }
      };
    }
  };

  return new accessibilityExtensionContextClass();
}