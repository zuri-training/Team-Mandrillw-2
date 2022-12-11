from django.db import models

class File(models.Model):
    filename = models.Filefield(upload_to='uploads/')
    date_uploaded = models.DateTimeField(auto_now_add=True)
    date_update = models.DateTimeField(auto_now=True)

    @property
    def file_size(self):
        return self.filename.size

    @property
    def file_type(self):
        return self.filename.content_type

    def __str__(self):
        return f'{self.filename} - {self.filesize}'