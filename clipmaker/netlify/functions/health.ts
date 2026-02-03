export async function handler(event: any) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
      function: 'health'
    })
  }
}
