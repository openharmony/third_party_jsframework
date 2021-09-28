import { paramMock } from "./utils"

const windowPropertiesMock = {
  windowRect:'[PC preview] unknow windowRect',
  type:'[PC preview] unknow type',
  brightness: '[PC preview] unknow brightness',
  isTransparent: '[PC preview] unknow isTransparent',
  isFullScreen: '[PC preview] unknow isFullScreen',
  isKeepScreenOn: '[PC preview] unknow isKeepScreenOn',
  dimBehindValue: '[PC preview] unknow dimBehindValue',
  isLayoutFullScreen: '[PC preview] unknow isLayoutFullScreen',
  focusable: '[PC preview] unknow focusable',
  touchable: '[PC preview] unknow touchable',
  isPrivacyMode: '[PC preview] unknow isPrivacyMode',
  isRoundCorner: '[PC preview] unknow isRoundCorner'
}
const RectMock = {
  left: '[PC preview] unknow Rect.left',
  top: '[PC preview] unknow  Rect.top',
  width: '[PC preview] unknow Rect.width',
  height: '[PC preview] unknow Rect.height'
}
const AvoidAreaMock = {
  leftRect: RectMock,
  topRect: RectMock,
  rightRect: RectMock,
  bottomRect: RectMock
}
export const windowMock = {
  setBrightness: function (...args) {
    console.warn("Window.setBrightness interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setBackgroundColor: function (...args) {
    console.warn("Window.setBackgroundColor interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setTransparent: function (...args) {
    console.warn("Window.setTransparent interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setFullScreen: function (...args) {
    console.warn("Window.setFullScreen interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setKeepScreenOn: function (...args) {
    console.warn("Window.setKeepScreenOn interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setDimBehind: function (...args) {
    console.warn("Window.setDimBehind interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setLayoutFullScreen: function (...args) {
    console.warn("Window.setLayoutFullScreen interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setFocusable: function (...args) {
    console.warn("Window.setFocusable interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setTouchable: function (...args) {
    console.warn("Window.setTouchable interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setPrivacyMode: function (...args) {
    console.warn("Window.setPrivacyMode interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setSystemBarEnable: function (...args) {
    console.warn("Window.setSystemBarEnable interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setSystemBarProperties: function (...args) {
    console.warn("Window.setSystemBarProperties interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  getProperties: function (...args) {
    console.warn("Window.getProperties interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, windowPropertiesMock)
    } else {
      return new Promise((resolve) => {
        resolve(windowPropertiesMock)
      })
    }
  },
  getAvoidArea: function (...args) {
    console.warn("Window.getAvoidArea interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, AvoidAreaMock)
    } else {
      return new Promise((resolve) => {
        resolve(AvoidAreaMock)
      })
    }
  },
  moveTo: function (...args) {
    console.warn("Window.moveTo interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  resetSize: function (...args) {
    console.warn("Window.resetSize interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  loadContent: function (...args) {
    console.warn("Window.loadContent interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  hide: function (...args) {
    console.warn("Window.hide interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  show: function (...args) {
    console.warn("Window.show interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  isShowing: function (...args) {
    console.warn("Window.isShowing interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
    } else {
      return new Promise((resolve) => {
        resolve(paramMock.paramBooleanMock)
      })
    }
  },
  destroy: function (...args) {
    console.warn("Window.destroy interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  setOutsideTouchable: function (...args) {
    console.warn("Window.setOutsideTouchable interface mocked in the Previewer. How this interface works on the" +
        " Previewer may be different from that on a real device.")
    const len = args.length
    if (typeof args[len - 1] === 'function') {
      args[len - 1].call(this, paramMock.businessErrorMock)
    } else {
      return new Promise((resolve) => {
        resolve()
      })
    }
  },
  on: function (...args) {
    console.warn("Window.on interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
    const len = args.length
    args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
  },
  off: function (...args) {
    console.warn("Window.off interface mocked in the Previewer. How this interface works on the Previewer may be" +
        " different from that on a real device.")
    const len = args.length
    args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
  },
}
export function mockWindow() {
  const SizeMock = {
    width: '[PC preview] unknow width',
    height: '[PC preview] unknow height'
  }
  const getSplitScreenBoundsMock = {
    splitMode: '[PC preview] unknow splitMode',
    primaryBounds: RectMock,
    secondaryBounds: RectMock,
  }
  global.systemplugin.window = {
    getTopWindow: function (...args) {
      console.warn("window.getTopWindow interface mocked in the Previewer. How this interface works on the Previewer" +
          " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, windowMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(windowMock)
        })
      }
    },
    create: function (...args) {
      console.warn("Window.create interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, windowMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(windowMock)
        })
      }
    },
    find: function (...args) {
      console.warn("Window.find interface mocked in the Previewer. How this interface works on the" +
          " Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, windowMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(windowMock)
        })
      }
    },
    getWindowMode: function (...args) {
      console.warn("Window.getWindowMode interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock)
        })
      }
    },
    getSplitScreenBounds: function (...args) {
      console.warn("window.getSplitScreenBounds interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, getSplitScreenBoundsMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(getSplitScreenBoundsMock)
        })
      }
    },
    isFloatingAbilityWindowVisible: function (...args) {
      console.warn("window.isFloatingAbilityWindowVisible interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock)
        })
      }
    },
    setSplitBarVisibility: function (...args) {
      console.warn("window.setSplitBarVisibility interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    }
  }
}