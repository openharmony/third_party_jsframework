/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { paramMock } from "../utils"

export function mockPrivacyManager() {
    const UsedRecordDetailMock = {
        status: "[PC Preview] unknown status",
        timestamp: "[PC Preview] unknown timestamp",
        accessDuration: "[PC Preview] unknown accessDuration",
    };
    const PermissionUsedRecordMock = {
        permissionName: "[PC Preview] unknown permissionName",
        accessCount: "[PC Preview] unknown accessCount",
        rejectCount: "[PC Preview] unknown rejectCount",
        lastAccessTime: "[PC Preview] unknown lastAccessTime",
        lastRejectTime: "[PC Preview] unknown lastRejectTime",
        lastAccessDuration: "[PC Preview] unknown lastAccessDuration",
        accessRecords: [UsedRecordDetailMock],
        rejectRecords: [UsedRecordDetailMock],
    };
    const BundleUsedRecordMock = {
        tokenId: "[PC Preview] unknown tokenId",
        isRemote: "[PC Preview] unknown isRemote",
        deviceId: "[PC Preview] unknown deviceId",
        bundleName: "[PC Preview] unknown bundleName",
        permissionRecords: [PermissionUsedRecordMock]
    };
    const resultMock = {
        beginTime: '[PC preview] unknow beginTime',
        endTime: '[PC preview] unknow endTime',
        bundleRecords: [BundleUsedRecordMock],
    };
    const privacyManager = {
        addPermissionUsedRecord: function (...args) {
            console.warn("privacyManager.addPermissionUsedRecord interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (len > 0 && typeof args[len - 1] === 'function') {
                  args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
            } else {
                return new Promise(resolve, reject => {
                    resolve(paramMock.paramNumberMock);
                })
            }
        },
        getPermissionUsedRecords: function (...args) {
            console.warn("privacyManager.getPermissionUsedRecords interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
                const len = args.length;
                if (typeof args[len - 1] === 'function') {
                    args[len - 1].call(this, paramMock.businessErrorMock, resultMock)
                } else {
                    return new Promise(resolve, reject => {
                        resolve(resultMock);
                    })
                }
        },
    };
    return privacyManager;
}
