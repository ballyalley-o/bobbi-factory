const RESPONSE = {
  ERROR: {
    BAD_REQUEST: {
      status: 400,
      message: 'Bad Request',
    },
    UNAUTHORIZED: {
      status: 401,
      message: 'Unauthorized',
    },
    FORBIDDEN: {
      status: 403,
      message: 'Forbidden',
    },
    NOT_FOUND: {
      status: 404,
      message: 'Not Found',
    },
    INTERNAL_SERVER_ERROR: {
      status: 500,
      message: 'Internal Server Error',
    },
    FETCH: {
      status: 500,
      message: 'Fetch invalid without an Id',
    },
  },
  SUCCESS: {
    OK: {
      status: 200,
      message: 'OK',
    },
    CREATED: {
      status: 201,
      message: 'Created',
    },
    ACCEPTED: {
      status: 202,
      message: 'Accepted',
    },
    NO_CONTENT: {
      status: 204,
      message: 'No Content',
    },
  },
}

export default RESPONSE
