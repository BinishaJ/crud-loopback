// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get} from "@loopback/rest";

export class TestControllerController {
  constructor() {}
  @get('/test',{
    responses:{
      '200': {
        description: 'Test Description',
        content: {
          'application/json': {
            schema: {
              type: 'string'
            }
          }
        }
      }
    }
  })
  async test(): Promise<string> {
    console.log("Test");
    return "Test";
  }
}

