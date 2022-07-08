/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import { paramMock } from "../../utils"

export const AbilityInfo = {
    name: "[PC preview] unknown name",
    bundleName: "[PC preview] unknown bundleName",
    moduleName: "[PC preview] unknown moduleName",
    process: "[PC preview] unknown process",
    targetAbility: "[PC preview] unknown targetAbility",
    backgroundModes: "[PC preview] unknown backgroundModes",
    isVisible: "[PC preview] unknown isVisible",
    formEnabled: "[PC preview] unknown formEnabled",
    type: {
        UNKNOWN: 0,
        PAGE: 2,
        SERVICE: 3,
        DATA: 4,
    },
    subType: {
        UNSPECIFIED: 0,
        CA: 1,
    },
    orientation: {
        UNSPECIFIED: 0,
        LANDSCAPE: 2,
        PORTRAIT: 1,
        FOLLOW_RECENT: 2,
        LANDSCAPE_INVERTED: 4,
        PORTRAIT_INVERTED: 3,
        AUTO_ROTATION: 5,
        AUTO_ROTATION_LANDSCAPE: 7,
        AUTO_ROTATION_PORTRAIT: 6,
        AUTO_ROTATION_RESTRICTED: 8,
        AUTO_ROTATION_LANDSCAPE_RESTRICTED: 10,
        AUTO_ROTATION_PORTRAIT_RESTRICTED: 9,
        LOCKED: 11,
    },
    launchMode: {
        SINGLETON: 0,
        STANDARD: 1,
    },
    permissions: [paramMock.paramStringMock],
    deviceTypes: [paramMock.paramStringMock],
    deviceCapabilities: [paramMock.paramNumberMock],
    readPermission: '[PC Preview] unknow readPermission',
    writePermission: '[PC Preview] unknow writePermission',
    appId: '[PC Preview] unknow appId',
    label: "[PC preview] unknown label",
    description: "[PC preview] unknown description",
    uid: '[PC Preview] unknow uid',
    installTime: '[PC Preview] unknow installTime',
    updateTime: '[PC Preview] unknow updateTime',
    descriptionId: '[PC Preview] unknow descriptionId',
    applicationInfo: {
        packageName: "[PC preview] unknown packageName",
        description: "[PC preview] unknown description",
        descriptionId: "[PC preview] unknown descriptionId",
        enabled: "[PC preview] unknown enabled",
        systemApp: "[PC preview] unknown systemApp",
        className: "[PC preview] unknown className",
        name: "[PC preview] unknown name",
        label: "[PC preview] unknown label",
        labelId: "[PC preview] unknown labelId",
        icon: "[PC preview] unknown icon",
        iconId: "[PC preview] unknown iconId",
        process: "[PC preview] unknown process",
        sourceDir: "[PC preview] unknown sourceDir",
        moduleSourceDirs: [paramMock.paramStringMock],
        permissions: [paramMock.paramStringMock],
        moduleInfos: [{
            moduleName: "[PC preview] unknown moduleName",
            moduleSourceDir: "[PC preview] unknown moduleSourceDir",
        }],
        entryDir: "[PC preview] unknown entryDir",
        codePath: "[PC preview] unknown codePath",
        metaData: [{
            name: "[PC preview] unknown name",
            value: "[PC preview] unknown value",
            extra: "[PC preview] unknown extra",
        }],
        metadata: [{
            name: "[PC preview] unknown name",
            value: "[PC preview] unknown value",
            resource: "[PC preview] unknown resource",
        }],
        removable: "[PC preview] unknown removable",
        accessTokenId: "[PC preview] unknown accessTokenId",
        uid: "[PC preview] unknown uid",
        entityType: "[PC preview] unknown entityType",
        fingerprint: "[PC preview] unknown fingerprint",
        iconResource: "[PC preview] unknown iconResource",
        labelResource: "[PC preview] unknown labelResource",
        descriptionResource: "[PC preview] unknown descriptionResource",
        appDistributionType: "[PC preview] unknown appDistributionType",
        appProvisionType: "[PC preview] unknown appProvisionType",
        supportedModes: "[PC preview] unknown supportedModes",
        flags: "[PC preview] unknown flags",
        customizeData: {
            key: "[PC preview] unknown key",
            value: {
                CustomizeData: {
                    name: "[PC preview] unknown name",
                    value: "[PC preview] unknown value",
                }
            }
        }
    },
    metaData: [{
        name: "[PC preview] unknown name",
        value: "[PC preview] unknown value",
        extra: "[PC preview] unknown extra",
    }],
    metadata: [{
        name: "[PC preview] unknown name",
        value: "[PC preview] unknown value",
        resource: "[PC preview] unknown resource",
    }],
    enabled: "[PC preview] unknown enabled",
    supportWindowMode: [{
        FULL_SCREEN: 0,
        SPLIT: 1,
        FLOATING: 2,
    }],
    maxWindowRatio: "[PC preview] unknown maxWindowRatio",
    minWindowRatio: "[PC preview] unknown minWindowRatio",
    maxWindowWidth: "[PC preview] unknown maxWindowWidth",
    minWindowWidth: "[PC preview] unknown minWindowWidth",
    maxWindowHeight: "[PC preview] unknown maxWindowHeight",
    minWindowHeight: "[PC preview] unknown minWindowHeight",
    formEntity: "[PC preview] unknown formEntity",
    minFormHeight: "[PC preview] unknown minFormHeight",
    defaultFormHeight: "[PC preview] unknown defaultFormHeight",
    minFormWidth: "[PC preview] unknown minFormWidth",
    defaultFormWidth: "[PC preview] unknown defaultFormWidth",
    uri: "[PC preview] unknown uri",
}