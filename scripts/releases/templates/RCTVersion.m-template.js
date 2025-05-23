/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

/*::
import type {Version} from '../utils/version-utils';
*/

module.exports = ({version} /*: {version: Version} */) /*: string */ => `/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * ${'@'}generated by scripts/releases/set-version.js
 */

#import "RCTVersion.h"

NSString* const RCTVersionMajor = @"major";
NSString* const RCTVersionMinor = @"minor";
NSString* const RCTVersionPatch = @"patch";
NSString* const RCTVersionPrerelease = @"prerelease";


NSDictionary* RCTGetReactNativeVersion(void)
{
  static NSDictionary* __rnVersion;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^(void){
    __rnVersion = @{
                  RCTVersionMajor: @(${version.major}),
                  RCTVersionMinor: @(${version.minor}),
                  RCTVersionPatch: @(${version.patch}),
                  RCTVersionPrerelease: ${
                    version.prerelease != null
                      ? `@"${version.prerelease}"`
                      : '[NSNull null]'
                  },
                  };
  });
  return __rnVersion;
}
`;
