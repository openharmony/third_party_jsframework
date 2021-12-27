import { paramMock } from "../utils"

export function mockWifi() {
  const linkedInfoMock = {
    ssid: '[PC preview] unknow ssid',
    bssid: '[PC preview] unknow bssid',
    networkId: '[PC preview] unknow networkId',
    rssi: '[PC preview] unknow rssi',
    band: '[PC preview] unknow band',
    linkSpeed: '[PC preview] unknow linkSpeed',
    frequency: '[PC preview] unknow frequency',
    isHidden: '[PC preview] unknow isHidden',
    isRestricted: '[PC preview] unknow isRestricted',
    chload: '[PC preview] unknow chload',
    snr: '[PC preview] unknow snr',
    macAddress: '[PC preview] unknow macAddress',
    ipAddress: '[PC preview] unknow ipAddress',
    suppState: '[PC preview] unknow suppState',
    connState: '[PC preview] unknow connState'
  }

  const ipInfoMock = {
    ipAddress: '[PC preview] unknow ipAddress',
    gateway: '[PC preview] unknow gateway',
    netmask: '[PC preview] unknow netmask',
    primaryDns: '[PC preview] unknow primaryDns',
    secondDns: '[PC preview] unknow secondDns',
    serverIp: '[PC preview] unknow serverIp',
    leaseDuration: '[PC preview] unknow leaseDuration'
  }

  const wifiScanInfoMock = {
    ssid: '[PC preview] unknow ssid',
    bssid: '[PC preview] unknow bssid',
    securityType: '[PC preview] unknow securityType',
    rssi: '[PC preview] unknow rssi',
    band: '[PC preview] unknow band',
    frequency: '[PC preview] unknow frequency',
    timestamp: '[PC preview] unknow timestamp',
  }

  const wifiDeviceConfigMock = {
    ssid: '[PC preview] unknow ssid',
    bssid: '[PC preview] unknow bssid',
    preSharedKey: '[PC preview] unknow preSharedKey',
    isHiddenSsid: '[PC preview] unknow isHiddenSsid',
    securityType: '[PC preview] unknow securityType',
  }

  const wifiHotspotConfigMock = {
    ssid: '[PC preview] unknow ssid',
    securityType: '[PC preview] unknow securityType',
    band: '[PC preview] unknow band',
    preSharedKey: '[PC preview] unknow preSharedKey',
    maxConn: '[PC preview] unknow maxConn',
  }

  const wifiStationInfoMock = {
    name: '[PC preview] unknow name',
    macAddress: '[PC preview] unknow macAddress',
    ipAddress: '[PC preview] unknow ipAddress',
  }

  const EventListenerClass = class EventListener {
    constructor() {
      this.on = function (...args) {
        console.warn("wifi.on interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return;
      }
      this.off = function (...args) {
        console.warn("wifi.off interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
        return;
      }
    }
  }

  const wifi = {
    enableWifi: function (...args) {
      console.warn("wifi.enableWifi interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    disableWifi: function (...args) {
      console.warn("wifi.disableWifi interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    isWifiActive: function (...args) {
      console.warn("wifi.isWifiActive interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    scan: function (...args) {
      console.warn("wifi.scan interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    getScanInfos: function (...args) {
      console.warn("wifi.getScanInfos interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, [wifiScanInfoMock])
        } else {
          return new Promise((resolve) => {
            resolve([wifiScanInfoMock])
          })
        }
    },

    addDeviceConfig: function (...args) {
      console.warn("wifi.addDeviceConfig interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        const len = args.length
        if (typeof args[len - 1] === 'function') {
          args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
        } else {
          return new Promise((resolve) => {
            resolve(paramMock.paramNumberMock)
          })
        }
    },

    connectToNetwork: function (...args) {
      console.warn("wifi.connectToNetwork interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    connectToDevice: function (...args) {
      console.warn("wifi.connectToDevice interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    disconnect: function (...args) {
      console.warn("wifi.disconnect interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    getSignalLevel: function (...args) {
      console.warn("wifi.getSignalLevel interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramNumberMock;
    },

    getLinkedInfo: function (...args) {
      console.warn("wifi.getLinkedInfo interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, linkedInfoMock)
      } else {
        return new Promise((resolve) => {
          resolve(linkedInfoMock)
        })
      }
    },

    isConnected: function (...args) {
      console.warn("wifi.isConnected interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    getSupportedFeatures: function (...args) {
      console.warn("wifi.getSupportedFeatures interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramNumberMock;
    },

    isFeatureSupported: function (...args) {
      console.warn("wifi.isFeatureSupported interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    getDeviceMacAddress: function (...args) {
      console.warn("wifi.getDeviceMacAddress interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return [paramMock.paramArrayMock];
    },

    getIpInfo: function (...args) {
      console.warn("wifi.getIpInfo interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return ipInfoMock;
    },

    getCountryCode: function (...args) {
      console.warn("wifi.getCountryCode interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
        return paramMock.paramStringMock;
    },

    reassociate: function (...args) {
      console.warn("wifi.reassociate interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    reconnect: function (...args) {
      console.warn("wifi.reconnect interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    getDeviceConfigs: function (...args) {
      console.warn("wifi.getDeviceConfigs interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return [wifiDeviceConfigMock];
    },

    updateNetwork: function (...args) {
      console.warn("wifi.updateNetwork interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramNumberMock;
    },

    disableNetwork: function (...args) {
      console.warn("wifi.disableNetwork interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    removeAllNetwork: function (...args) {
      console.warn("wifi.removeAllNetwork interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    removeDevice: function (...args) {
      console.warn("wifi.removeDevice interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    enableHotspot: function (...args) {
      console.warn("wifi.enableHotspot interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    disableHotspot: function (...args) {
      console.warn("wifi.disableHotspot interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    isHotspotActive: function (...args) {
      console.warn("wifi.isHotspotActive interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    setHotspotConfig: function (...args) {
      console.warn("wifi.setHotspotConfig interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return paramMock.paramBooleanMock;
    },

    getHotspotConfig: function (...args) {
      console.warn("wifi.getHotspotConfig interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return wifiHotspotConfigMock;
    },

    getStations: function (...args) {
      console.warn("wifi.getStations interface mocked in the Previewer." +
      " How this interface works on the Previewer may be different from that on a real device.")
        return [wifiStationInfoMock];
    },

    EventListener: EventListenerClass
  }
  return wifi;
}
