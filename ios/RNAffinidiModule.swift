//
//  RNAffinidiModule.swift
//  RNAffinidiModule
//
//  Copyright © 2022 Bharat Saini. All rights reserved.
//

import Foundation

@objc(RNAffinidiModule)
class RNAffinidiModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
