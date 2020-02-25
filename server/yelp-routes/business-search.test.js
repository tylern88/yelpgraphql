import * as request from './business-search'

describe('POST /business/search', () =>{
  afterEach(() => jest.resetAllMocks())

  test('it should post to the route', ()=>{
    jest.spyOn(request, 'default').mockImplementationOnce({})


  })
})