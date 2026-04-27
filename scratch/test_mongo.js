const mongoose = require('mongoose');
const uri = "mongodb+srv://rajat:rajat%401005@cluster0.ssqlccs.mongodb.net/blog-app";

async function testConnection() {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB");
    
    // Create a generic schema
    const testSchema = new mongoose.Schema({ name: String });
    const TestModel = mongoose.models.Test || mongoose.model('Test', testSchema);
    
    // Test write
    await TestModel.create({ name: 'test_insert' });
    console.log("Successfully wrote to MongoDB");
    
    // Test read
    const docs = await TestModel.find({ name: 'test_insert' });
    console.log("Successfully read from MongoDB:", docs.length, "docs");
    
    // Cleanup
    await TestModel.deleteMany({ name: 'test_insert' });
    console.log("Cleaned up");
    
    process.exit(0);
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
}

testConnection();
