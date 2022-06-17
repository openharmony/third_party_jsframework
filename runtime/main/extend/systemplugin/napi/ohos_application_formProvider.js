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
import { paramMock } from "../utils"

export function mockFormProvider() {
  const FormType = {
    JS: 1,
  }
  const ColorMode = {
    MODE_AUTO : -1,
    MODE_DARK : 0,
    MODE_LIGHT : 1,
  }
  // A mock version of formInfo.
  const FormInfoMock = {
    bundleName: '[PC preview] unknow bundleName',
    moduleName: '[PC preview] unknow moduleName',
    abilityName: '[PC preview] unknow abilityName',
    name: '[PC preview] unknow name',
    description: '[PC preview] unknow description',
    type: FormType,
    jsComponentName: '[PC preview] unknow jsComponentName',
    colorMode: ColorMode,
    isDefault: '[PC preview] unknow isDefault',
    updateEnabled: '[PC preview] unknow updateEnabled',
    formVisibleNotify: '[PC preview] unknow formVisibleNotify',
    relatedBundleName: '[PC preview] unknow relatedBundleName',
    scheduledUpdateTime: '[PC preview] unknow scheduledUpdateTime',
    formConfigAbility: '[PC preview] unknow formConfigAbility',
    updateDuration: '[PC preview] unknow updateDuration',
    defaultDimension: '[PC preview] unknow defaultDimension',
    supportDimensions: [paramMock.paramNumberMock],
    customizeData: {"key": paramMock.paramStringMock},
  }
  const formProvider = {
    getFormsInfo: function (...args) {
      console.warn('formProvider.getFormsInfo interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      var array = new Array();
      array.push(FormInfoMock);
      // promise without option.
      if (len == 0) {
        return new Promise((resolve) => {
          resolve(array);
        });
      }
      // callback
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, array);
      } else {
        return new Promise((resolve) => {
          resolve(array);
        });
      }
    },
    requestPublishForm: function (...args) {
      console.warn('formProvider.requestPublishForm interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      const len = args.length;
      // callback
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramStringMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramStringMock);
        });
      }
    }
  }
  return formProvider;
}