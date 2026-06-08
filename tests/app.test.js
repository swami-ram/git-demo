const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    it("should return success message", async () => {
        const response = await request(app);

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(
            "CI/CD Demo Successful"
        );
    });
});
