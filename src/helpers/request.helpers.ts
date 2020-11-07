const apiUrl: string = 'http://localhost:8000'

type HTTPMethodType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS'

type ContentType = 'form-data' | 'json'

export async function request<T = any>(endPoint: string, method: HTTPMethodType = 'GET', body: any = null, contentType: ContentType = 'json'): Promise<T> {
  try {
    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })

    if (contentType === 'form-data') {
      headers = new Headers({
        'Accept': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    }

    const options: RequestInit = { method, headers }

    if (body) {
      options.body = body
    }

    const response = await fetch(apiUrl.concat(endPoint), options)
    const json = await response.json()
    
    return json
  } catch (e) {
    throw e
  }
}