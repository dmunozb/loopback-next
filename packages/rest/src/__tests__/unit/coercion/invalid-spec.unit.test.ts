// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/rest
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {ParameterLocation, ParameterObject} from '@loopback/openapi-v3';
import {RestHttpErrors} from '../../../';
import {test} from './utils';

const INVALID_PARAM: ParameterObject = {
  in: <ParameterLocation>'unknown',
  name: 'aparameter',
  // @ts-expect-error - TS compiler catches `unknown` as invalid
  schema: {type: 'unknown'},
};

describe('throws error for invalid parameter spec', () => {
  test(INVALID_PARAM, '', RestHttpErrors.invalidParamLocation('unknown'));
});
