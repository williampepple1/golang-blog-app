package routes

import (
	"blog-app/controllers"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func SetupUserRoutes(r *gin.Engine, db *gorm.DB) {
	r.POST("/register", controllers.RegisterUser(db))
	r.POST("/login", controllers.LoginUser(db))
}
