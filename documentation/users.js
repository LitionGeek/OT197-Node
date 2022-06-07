/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *          type: object
 *          properties:
 *            firstName:
 *              type: string
 *              description: User First Name
 *            lastName:
 *              type: string
 *              description: User Last Name
 *            email:
 *              type: string
 *              description: User email
 *            password:
 *              type: string
 *              description: User Password
 *            roleId:
 *              type: integer
 *              description: User history
 *            image:
 *              type: string
 *              description:  User image (.jpg)
 *          required:
 *            - firstName
 *            - lastName
 *            - email
 *            - password
 *            - roleId
 *            - image
 *          example:
 *            firstName : Juan
 *            lastName: Perez
 *            email: juanperez@gmail.com 
 *            password: Ju#nPerez2  
 *            roleId: 1
 *            image: juanavatar.jpg
 */



/* GET users listing. */
/**
 * @swagger
 * /users/users:
 *    get:
 *      summary: return all users
 *      tags: [User]
 *      responses:
 *        200:
 *          description : all users
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items :
 *                $ref: '#/components/schemas/User'
 */
/**
 * @swagger
 * /users/auth/register:
 *    post:
 *      summary: create a new user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: new user created
 *        404:
 *          description: not user created
 */