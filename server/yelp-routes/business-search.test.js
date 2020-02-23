import businessSearch from './business-search'
import * as request from './business-search'

describe('POST /business/search', () =>{
  afterEach(() => jest.resetAllMocks())

  test('it should post to the route', ()=>{
    jest.spyOn(request, 'default').mockImplementationOnce(() => Promise.resolve())
    const mockRequest = {
      body:{
        term: 'Burger',
        location: 'Salt Lake City'
      }
    }
    const mockResponse = {}
    businessSearch(mockRequest, mockResponse).then(() =>{
      expect(request.default).toHaveBeenCalledWith({
        body:{
          term: 'Burger',
          location: 'Salt Lake City'
        }
      })

    })
  })
})